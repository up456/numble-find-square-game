const rightSound = createSound('rightSound');
const wrongSound = createSound('wrongSound');
const bgmSound = createSound('bgmSound');
const gameOverSound = createSound('gameOverSound');
const gameWinSound = createSound('gameWinSound');
const moveSound = createSound('moveSound');

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
export const playGameOver = () => {
  playSound(gameOverSound);
};
export const playGameWin = () => {
  playSound(gameWinSound);
};
export const playMove = () => {
  playSound(moveSound);
};
// 생성 함수
function createSound(src: string) {
  return new Audio(require(`./sound/${src}.mp3`));
}

function playSound(sound: HTMLAudioElement) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound: HTMLAudioElement) {
  sound.pause();
}
