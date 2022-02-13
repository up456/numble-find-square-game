const rightSound = new Audio(require('./sound/rightSound.mp3'));
const wrongSound = new Audio(require('./sound/wrongSound.mp3'));
const bgmSound = new Audio(require('./sound/bgm.mp3'));

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
