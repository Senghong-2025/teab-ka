import type { WeddingFormData } from "~/models/wedding";
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export default function useWedding() {

    const { $db } = useNuxtApp();

    const createDefaultWeddingFormData = (): WeddingFormData => ({
        hostId: 100,
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

    const formData = ref<WeddingFormData>(createDefaultWeddingFormData());

    const resetForm = () => {
        formData.value = createDefaultWeddingFormData();
    };

    const getByHostId = async (hostId: number) => {
        try {
            const weddingCollection = collection($db, 'wedding');
            const q = query(weddingCollection, where('hostId', '==', hostId));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                return null;
            }

            const doc = querySnapshot.docs[0];
            if (!doc) {
                return null;
            }

            const result = {
                id: doc.id,
                ...doc.data()
            } as WeddingFormData & { id: string };
            console.log('RES', result);
            return result;
        } catch (error) {
            console.error('Error fetching wedding by hostId:', error);
            throw error;
        }
    };

    const handleSubmit = async () => {
        try {
            const weddingCollection = collection($db, 'wedding');

            // Check if hostId already exists
            const q = query(weddingCollection, where('hostId', '==', formData.value.hostId));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                throw new Error(`Wedding invitation for hostId ${formData.value.hostId} already exists`);
            }

            // Create new wedding invitation
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
    }
};