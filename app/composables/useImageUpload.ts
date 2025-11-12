export default function useImageUpload() {
    const { uploadImage } = useApi();

    const selectedFile = ref<File>();
    const previewImage = ref<string>();
    const onSingleFileChange = async (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (!target.files || target.files.length === 0) return;

        const files = target.files[0];
        console.log('Selected files:', files);

        selectedFile.value = files as File;
        previewImage.value = URL.createObjectURL(selectedFile.value);
    };
    const uploadSingleImage = async (folder: string) => {
        if (!selectedFile.value) return;
        try {
            await uploadImage(selectedFile.value, folder);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        selectedFile,
        uploadSingleImage,
        previewImage,
        onSingleFileChange,
    }
};
