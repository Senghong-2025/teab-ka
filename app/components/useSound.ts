export default function useSound() {
    const soundList: Record<number, string> = {
        1: '/sound/1.mp3',
        2: '/sound/2.mp3',
        3: '/sound/3.mp3'
    }
    return {
        soundList,
    }
};