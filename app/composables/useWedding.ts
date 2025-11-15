import { type IWeddingFormData, WeddingFormData } from './../models/wedding';
import { collection, addDoc, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import type { ICloudinaryUploadResponse } from '~/models/upload';
// import useApi from "@/composables/useApi";
import { useStore } from '~~/stores';

export default function useWedding() {

    const { $db } = useNuxtApp();
    const store = useStore();
    const isLoading = ref(false);
    const { uploadMulitpleImages } = useApi();
    const preveiwImageFiles = ref<File[]>([]);
    const createDefaultWeddingFormData = (): IWeddingFormData => ({
        hostId: store.user.random_id ?? 1000000,
        bride: { fullName: '', fullNameKh: '', parentsNames: '' },
        groom: { fullName: '', fullNameKh: '', parentsNames: '' },
        weddingDate: '',
        weddingTime: '',
        ceremony: { venueName: '', address: '', addressKh: '' },
        reception: { venueName: '', address: '' },
        sameVenue: false,
        dressCode: '',
        rsvpDeadline: '',
        website: '',
        specialInstructions: '',
        contact: { phone: '', email: '' },
        mapUrl: '',
        coverPhoto: '',
    });

    const formData = ref<IWeddingFormData>(createDefaultWeddingFormData());

    const resetForm = () => {
        formData.value = createDefaultWeddingFormData();
    };

    const weddingData = ref<WeddingFormData[]>([]);
    const getByHostId = async (hostId: string | number): Promise<IWeddingFormData[]> => {
        isLoading.value = true;
        try {
            const weddingCollection = collection($db, 'wedding');
            const q = query(weddingCollection, where('hostId', '==', String(hostId)));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                console.warn(`No wedding data found for hostId: ${hostId}`);
                return [];
            }

            const weddings: IWeddingFormData[] = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }) as IWeddingFormData);

            weddingData.value = weddings.map(result => new WeddingFormData(result));
            return weddings;
        } catch (error) {
            console.error(`Error fetching wedding for hostId ${hostId}:`, error);
            throw error;
        } finally {
            isLoading.value = false;
        }
    };

    const weddingDetails = ref<WeddingFormData>({} as WeddingFormData);
    const getWeddingDetails = async (weddingId: string) => {
        try {
            const weddingDocRef = doc($db, "wedding", weddingId);
            const weddingDocSnap = await getDoc(weddingDocRef);
           if (!weddingDocSnap.exists()) {
            console.log("No such document!");
            return null; // Return null if the document doesn't exist
            }

            const result = {
            id: weddingDocSnap.id,
            ...weddingDocSnap.data()
            } as IWeddingFormData;

            weddingDetails.value = new WeddingFormData(result);
            return weddingDetails;
        } catch (error) {
            console.error(`Error fetching wedding for hostId ${weddingId}:`, error);
            throw error;
        }
    };

    const handleUpdateImages = async (): Promise<ICloudinaryUploadResponse[]> => {
        if (!preveiwImageFiles.value.length) return [];
        try {
            const response = await uploadMulitpleImages(preveiwImageFiles.value);
            return response.data;
        } catch (error) {
            console.error("Upload Error:", error);
            return [];
        }
    };

    const handleSubmit = async () => {
        try {
            const weddingCollection = collection($db, 'wedding');
            // Create new wedding invitation
            const uploads = await handleUpdateImages();
            formData.value.photoPreview = uploads.map((item) => item.url);
            const response = await addDoc(weddingCollection, {
                ...formData.value,
                createdAt: new Date().toISOString()
            });
            console.log('Wedding invitation created with ID:', response.id);
            resetForm();
            return response;
        } catch (error) {
            console.error('Error creating wedding invitation:', error);
            throw error;
        }
    };
    return {
        formData,
        resetForm,
        handleSubmit,
        getByHostId,
        weddingData,
        isLoading,
        store,
        preveiwImageFiles,
        handleUpdateImages,
        getWeddingDetails,
        weddingDetails,
    }
};