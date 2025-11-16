export default function useNavbar() {
    const route = useRoute();
    const isHideNavbar = computed(() => {
        return [
            '/',
            '/auth',
            '/wedding/share'
        ].includes(route.path);
    });

    return {
        isHideNavbar,
    }
};