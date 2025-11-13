export default function useNavbar() {
    const route = useRoute();
    const isHideNavbar = computed(() => {
        return [
            '/',
            '/auth',
            '/wedding/card/2'
        ].includes(route.path);
    });

    return {
        isHideNavbar,
    }
};