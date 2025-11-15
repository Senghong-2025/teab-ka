import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import type { IInviteMember } from "~/models/invite";

export default function useInviteMember() {
    const isDialogVisible = ref(false);
    const { $db } = useNuxtApp();
    const isLoading = ref(false);
    const route = useRoute();
    const getQuery = computed(() => route.query);
    const inviteModel = reactive<IInviteMember>({
        eventId: String(getQuery.value.event_id),
        title: '',
        isInvited: false
    })

    const createInviteMember = async () => {
        isLoading.value = true;
        try {
            const weddingInviteCollection = collection($db, 'weddingInvite');
            await addDoc(weddingInviteCollection, inviteModel);
            await getInviteByEventId();
        } catch (error) {
            console.error('Create invite error', error);
        } finally {
            isLoading.value = false;
            isDialogVisible.value = false;
        }
    };

    const deleteInviteMember = async (id: string) => {
        isLoading.value = true;
        try {
            const weddingInviteDoc = doc($db, "weddingInvite", id);
            await deleteDoc(weddingInviteDoc);

            await getInviteByEventId();
        } catch (error) {
            console.error("Delete invite error:", error);
        } finally {
            isLoading.value = false;
        }
    };

    const inviteList = ref<IInviteMember[]>([]);
    const getInviteByEventId = async () => {
        try {
            const inviteCollection = collection($db, 'weddingInvite');
            const q = query(inviteCollection, where('eventId', '==', String(getQuery.value.event_id)));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
            }) as IInviteMember);
            inviteList.value = data;
        } catch (error) {
            console.error("Get Invite error", error);
        }
    };
    return {
        isDialogVisible,
        inviteModel,
        createInviteMember,
        isLoading,
        getInviteByEventId,
        inviteList,
        deleteInviteMember,
    }
}