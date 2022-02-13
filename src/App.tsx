import { useEffect, useState } from 'react';
import GameProgressInformation from './components/gameProgressInformation';
import GameZone from './components/gameZone';
import './css/app.css';
import {
  playBgm,
  playGameOver,
  playGameWin,
  playMove,
  playRight,
  playWrong,
  stopBgm,
} from './sound';

// 중요 기본값
const DEFAULT_STAGE = 1;
const DEFAULT_TIME = 15;
const DEFAULT_SCORE = 0;
const DEFAULT_LAST_STAGE = 25;

// 컴포넌트
function App() {
  const [stage, setStage] = useState(DEFAULT_STAGE);
  const [time, setTime] = useState(DEFAULT_TIME);
  const [score, setScore] = useState(DEFAULT_SCORE);
  const [lastStage, setLastStage] = useState(DEFAULT_LAST_STAGE);
  const [playing, setPlaying] = useState(false);

  const handleClickSquare = (event: any) => {
    if (!playing) {
      playBgm();
      setPlaying(true);
    }
    if (event.target.dataset.id === 'equivalent') {
      setTime((prevTime) => prevTime - 3);
      playWrong();
    } else {
      setStage((prevStage) => prevStage + 1);
      setScore((prevScore) => prevScore + stage * stage * stage * time);
      setTime(DEFAULT_TIME);
      playRight();
    }
  };

  const gameReset = (message: string, arrive: boolean = false) => {
    alert(`${message}
스테이지:${arrive ? stage - 1 : stage}, 점수:${score}`);
    setStage(DEFAULT_STAGE);
    setTime(DEFAULT_TIME);
    setScore(DEFAULT_SCORE);
    setPlaying(false);
  };

  const handleLastStageChange = (changeValue: string) => {
    setLastStage(Number(changeValue));
    stopBgm();
    playMove();
    gameReset(`최종스테이지 변경 다시시작!`);
  };

  useEffect(() => {
    if (playing) {
      let timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      if (stage > lastStage) {
        clearInterval(timer);
        stopBgm();
        playGameWin();
        setTimeout(() => {
          gameReset('ARRIVE LAST STAGE!!', true);
        }, 10);
      }
      if (time < 1) {
        clearInterval(timer);
        stopBgm();
        playGameOver();
        gameReset('GAME OVER!!');
      }
      return () => {
        clearInterval(timer);
      };
    }
  });

  return (
    <>
      <GameProgressInformation
        stage={stage}
        time={time}
        score={score}
        onChange={handleLastStageChange}
        defaultLastStage={DEFAULT_LAST_STAGE}
      />
      <GameZone
        stage={stage}
        onClick={handleClickSquare}
        lastStage={lastStage}
      />
    </>
  );
}

export default App;
