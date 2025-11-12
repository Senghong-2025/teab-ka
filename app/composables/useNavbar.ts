export default function useNavbar() {
    const route = useRoute();
    const isHideNavbar = computed(() => {
        return [
            '/',
            '/auth/login',
            '/auth/register',
            '/wedding/card/2'
        ].includes(route.path);
    });

    return {
        isHideNavbar,
    }
};