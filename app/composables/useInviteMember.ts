import { addDoc, collection, deleteDoc, doc, getDocs, query, where, updateDoc, orderBy } from "firebase/firestore";
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
        let hasError = false;
        try {
            // Check for duplicate title
            const isDuplicate = inviteList.value.some(
                invite => invite.title.toLowerCase().trim() === inviteModel.title.toLowerCase().trim()
            );

            if (isDuplicate) {
                throw new Error('A member with this title already exists');
            }

            const weddingInviteCollection = collection($db, 'weddingInvite');
            await addDoc(weddingInviteCollection, {
                ...inviteModel,
                createdOn: new Date()
            });
            await getInviteByEventId();
        } catch (error) {
            hasError = true;
            console.error('Create invite error', error);
            throw error;
        } finally {
            setLoading("create", false);
            if (!hasError) {
                isDialogVisible.value = false;
            }
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
            const q = query(inviteCollection, where('eventId', '==', String(getQuery.value.event_id)), orderBy('createdOn', 'asc'));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
            }) as IInviteMember);
            inviteList.value = data;
        } catch (error) {
            console.error("Get Invite error", error);
        }
        setLoading("get", false);
    };

    const updateIsInvited = async (id: string, isInvited: boolean) => {
        setLoading(`update${id}`, true);
        console.log('TEST');
        try {
            const inviteDocRef = doc($db, "weddingInvite", id);
            await updateDoc(inviteDocRef, { isInvited });
            await getInviteByEventId();
        } catch (error) {
            console.error("Update isInvited error:", error);
        } finally {
            setLoading(`update${id}`, false);
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
        confirmDeleteVisible,
        updateIsInvited,
    }
}