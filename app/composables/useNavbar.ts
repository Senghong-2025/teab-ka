export default function useNavbar() {
    const route = useRoute();
    const isHideNavbar = computed(() => {
        return ['/', '/auth/login', '/auth/register'].includes(route.path);
    });

    return {
        isHideNavbar,
    }
};