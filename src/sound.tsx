const rightSound = new Audio('../public/sound/rightSound.mp3');
const wrongSound = new Audio('../public/sound/wrongSound.mp3');
const bgmSound = new Audio('../public/sound/bgmSound.mp3');

export const playRight = () => {
  playSound(rightSound);
};
export const playWrong = () => {
  playSound(wrongSound);
};
export const playBgm = () => {
  playSound(bgmSound);
};
export const stopBgm = () => {
  stopSound(bgmSound);
};

function playSound(sound: HTMLAudioElement) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound: HTMLAudioElement) {
  sound.pause();
}
