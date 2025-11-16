import { doc, deleteDoc } from "firebase/firestore";
import { useStore } from "~~/stores";

export default function useEventSetting() {

    const {setLoading, isLoading } = useLoading();
    const { getByHostId } = useWedding();
    const { $db } = useNuxtApp();
    const store = useStore();

    const onDeleteEvent = async (eventId: string) => {
        setLoading(`delete${eventId}`, true);
        try {
            const eventDoc = doc($db, "wedding", eventId);
            await deleteDoc(eventDoc);
            await getByHostId(String(store.user.random_id));
            return { success: true };
        } catch (error) {
            console.error("Delete event error:", error);
            return { success: false, error };
        } finally {
            setLoading(`delete${eventId}`, false);
        }
    };

    return {
        onDeleteEvent,
        isEventLoading: isLoading
    };
};