export default function useApi() {
    const { $api } = useNuxtApp();
    const uploadImage = (file: File, folder = 'default') => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('folder', folder);

        return $api.post('/common/upload-cloudinary', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    };

    return {
        uploadImage,
    }
};