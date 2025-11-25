/* eslint-disable @typescript-eslint/no-explicit-any */
import { type IWeddingFormData, WeddingFormData } from './../models/wedding';
import { collection, addDoc, query, where, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore';
// import type { ICloudinaryUploadResponse } from '~/models/upload';
import { useStore } from '~~/stores';

export default function useWedding() {

    const { $db } = useNuxtApp();
    const store = useStore();
    const { setLoading, isLoading } = useLoading();
    const { uploadMulitpleImages } = useApi();
    const preveiwImageFiles = ref<File[]>([]);
    const qrCode1File = ref<File | null>(null);
    const qrCode2File = ref<File | null>(null);
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
        setLoading('getHost', true);
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
            setLoading('getHost', false);
        }
    };

    const weddingDetails = ref<WeddingFormData>({} as WeddingFormData);
    const getWeddingDetails = async (weddingId: string) => {
        try {
            const weddingDocRef = doc($db, "wedding", weddingId);
            const weddingDocSnap = await getDoc(weddingDocRef);
           if (!weddingDocSnap.exists()) {
            console.log("No such document!");
            return null;
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

    const handleUpdateImages = async (): Promise<any> => {
        if (!preveiwImageFiles.value.length) return [];
        try {
            const response = await uploadMulitpleImages(preveiwImageFiles.value, 'images/wedding/');
            return response.data;
        } catch (error) {
            console.error("Upload Error:", error);
            throw new Error("Update image error");
        }
    };

    const handleUploadQrCodes = async (): Promise<{ qr1?: string; qr2?: string }> => {
        const result: { qr1?: string; qr2?: string } = {};

        try {
            // Upload QR Code 1
            if (qrCode1File.value) {
                const response = await uploadMulitpleImages([qrCode1File.value], 'images/wedding/qr/');
                if (response.data && response.data.length > 0) {
                    result.qr1 = response.data[0].download_url;
                }
            }

            // Upload QR Code 2
            if (qrCode2File.value) {
                const response = await uploadMulitpleImages([qrCode2File.value], 'images/wedding/qr/');
                if (response.data && response.data.length > 0) {
                    result.qr2 = response.data[0].download_url;
                }
            }

            return result;
        } catch (error) {
            console.error("QR Code Upload Error:", error);
            throw new Error("QR code upload error");
        }
    };

    const route = useRoute();
    const isEdit = computed(() => route.query.edit === "true");
    const weddingId = computed(() => route.query.i as string);
    const handleSubmit = async () => {
        setLoading("update", true);
        try {
            // Upload preview photos
            const uploads = await handleUpdateImages();
            if (!Array.isArray(formData.value.photoPreview)) {
                formData.value.photoPreview = [];
            }
            formData.value.photoPreview.push(
                ...uploads.map((item: { download_url: any; }) => item.download_url)
            );

            // Upload QR codes
            const qrUploads = await handleUploadQrCodes();
            if (qrUploads.qr1) {
                formData.value.khQrCode1 = qrUploads.qr1;
            }
            if (qrUploads.qr2) {
                formData.value.khQrCode2 = qrUploads.qr2;
            }

            // Update wedding event
            if (isEdit.value && weddingId.value) {
                const weddingRef = doc($db, "wedding", weddingId.value);
                await updateDoc(weddingRef, {
                    ...formData.value,
                    updatedAt: new Date().toISOString()
                });
                navigateTo("/wedding");
            }
            // Create new wedding invitation
            else {
                const weddingCollection = collection($db, 'wedding');
                const response = await addDoc(weddingCollection, {
                    ...formData.value,
                    createdAt: new Date().toISOString()
                });
                console.log('Wedding invitation created with ID:', response.id);
                resetForm();
                navigateTo('/wedding');
            }
        } catch (error) {
            console.error('Error creating wedding invitation:', error);
        } finally {
            setLoading("update", false);
        }
    };

    const onClickEdit = async (id: string) => {
        navigateTo({path: "/wedding/wedding-form", query: {i:  id, edit: "true" }});
    }

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
        onClickEdit,
        isEdit,
        weddingId,
        $db,
        setLoading,
        qrCode1File,
        qrCode2File,
    }
};