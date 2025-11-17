import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import type { IInviteMember } from "~/models/invite";

const inviteList = ref<IInviteMember[]>([]);

export default function useInviteMember() {
    const isDialogVisible = ref(false);
    const { $db } = useNuxtApp();
    const { isLoading, setLoading } = useLoading();
    const route = useRoute();
    const getQuery = computed(() => route.query);
    const confirmDeleteVisible = ref(false);

    const inviteModel = reactive<IInviteMember>({
        eventId: String(getQuery.value.event_id),
        title: '',
        isInvited: false
    })

    const createInviteMember = async () => {
        setLoading('create', true);
        try {
            const weddingInviteCollection = collection($db, 'weddingInvite');
            await addDoc(weddingInviteCollection, inviteModel);
            await getInviteByEventId();
        } catch (error) {
            console.error('Create invite error', error);
        } finally {
            setLoading("create", false);
            isDialogVisible.value = false;
        }
    };

    const deleteInviteMember = async (id: string) => {
        setLoading(`delete${id}`, true);
        try {
            const weddingInviteDoc = doc($db, "weddingInvite", id);
            await deleteDoc(weddingInviteDoc);
            await getInviteByEventId();
        } catch (error) {
            console.error("Delete invite error:", error);
        } finally {
            setLoading(`delete${id}`, false);
            confirmDeleteVisible.value = false;
        }
    };

    const getInviteByEventId = async (): Promise<void> => {
        setLoading("get", true);
        try {
            const inviteCollection = collection($db, 'weddingInvite');
            const q = query(inviteCollection, where('eventId', '==', String(getQuery.value.event_id)));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
            }) as IInviteMember);
            inviteList.value = data;
            console.log("New", inviteList.value);
        } catch (error) {
            console.error("Get Invite error", error);
        }
        setLoading("get", false);
    };
    return {
        isDialogVisible,
        inviteModel,
        createInviteMember,
        isLoading,
        getInviteByEventId,
        inviteList,
        deleteInviteMember,
        confirmDeleteVisible,
    }
}