import { productList } from "@/utils/constant";

export default function useProductList() {
    const { t } = useI18n();

    const translatedProductList = computed(() =>
        productList.map(product => ({
            ...product,
            name: t(`products.${product.key}.name`),
            description: t(`products.${product.key}.description`)
        }))
    );

    return {
        productList: translatedProductList,
    }
};