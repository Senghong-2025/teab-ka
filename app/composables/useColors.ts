import { ref, watch } from "vue";

export default function useColors() {
    const route = useRoute();
    const cardType = Number(route.query.type);
    const inviteCardColor = ref(localStorage.getItem(`inviteCardColor${cardType}`) || "#FFC310");
    const inviteTextColor = ref(localStorage.getItem(`inviteTextColor${cardType}`) || "#AD5900");

    watch(inviteCardColor, (val) => {
        localStorage.setItem(`inviteCardColor${cardType}`, val);
    });

    watch(inviteTextColor, (val) => {
        localStorage.setItem(`inviteTextColor${cardType}`, val);
    });

    const onRemoveWeddingCardColor = () => {
        localStorage.removeItem(`inviteCardColor${cardType}`)
        localStorage.removeItem(`inviteTextColor${cardType}`)
        inviteCardColor.value = "#FFC310"
        inviteTextColor.value = "#AD5900"
    };

    return {
        inviteCardColor,
        inviteTextColor,
        onRemoveWeddingCardColor,
    };
}
