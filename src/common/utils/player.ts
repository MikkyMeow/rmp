export const playTrack = (audio: HTMLAudioElement) => {
  audio.play();
};

export const pauseTrack = (audio: HTMLAudioElement) => {
  audio.pause();
};

export const stopTrack = (audio: HTMLAudioElement) => {
  audio.pause();
  audio.currentTime = 0;
};
