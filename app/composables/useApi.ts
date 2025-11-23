export default function useApi() {
    const { $api } = useNuxtApp();
    const config = useRuntimeConfig();
    const uploadImage = (file: File, folder = 'default') => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('folder', folder);

        return $api.post('/common/upload-cloudinary', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    };

    const uploadMulitpleImages = (files: File[], folder = 'default') => {
        const formData = new FormData();
        files.forEach((file) => {
            formData.append('files', file);
        });
        // formData.append('folder', folder);
        formData.append('path', folder);

        return $api.post('/github/upload-multiple', formData, {
            headers: { 'Content-Type': 'multipart/form-data', 'x-api-key': String(config.public.UPLOAD_API_KEY) || '' },
        });
    };

    return {
        uploadImage,
        uploadMulitpleImages,
    }
};