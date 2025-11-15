let unlocked = false;
let pendingSound: number | null = null; // store sound waiting to play

export const useSound = () => {
  const soundList: Record<number, string> = {
    1: "/sound/1.mp3",
    2: "/sound/2.mp3",
    3: "/sound/3.mp3",
  };

  let audioCtx: AudioContext | null = null;

  const unlock = () => {
    if (unlocked) return;

    audioCtx = new AudioContext();

    const buffer = audioCtx.createBuffer(1, 1, 22050);
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(audioCtx.destination);

    try {
      source.start(0);
      unlocked = true;
      console.log("🔓 Audio unlocked");
    } catch (e) {
      console.warn("Unlock failed:", e);
    }

    // If there was a pending sound → play it now
    if (pendingSound !== null) {
      const id = pendingSound;
      pendingSound = null;
      const audio = new Audio(soundList[id]);
      audio.play().catch(() => {});
    }

    window.removeEventListener("click", unlock);
    window.removeEventListener("touchstart", unlock);
  };

  onMounted(() => {
    window.addEventListener("click", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });
  });

  const playSound = (id: number) => {
    if (!unlocked) {
      // Save request for after unlock
      pendingSound = id;
      return;
    }

    const audio = new Audio(soundList[id]);
    audio.play().catch(err => console.warn("play failed:", err));
  };

  return { playSound };
};
