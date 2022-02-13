import { useEffect, useState } from 'react';
import GameProgressInformation from './components/gameProgressInformation';
import GameZone from './components/gameZone';
import './css/app.css';
import { playRight, playWrong } from './sound';

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

  const handleClickSquare = (event: any) => {
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

  const gameReset = (message: string) => {
    alert(`${message}
스테이지:${stage}, 점수:${score}`);
    setStage(DEFAULT_STAGE);
    setTime(DEFAULT_TIME);
    setScore(DEFAULT_SCORE);
  };

  const handleLastStageChange = (changeValue: string) => {
    setLastStage(Number(changeValue));
    gameReset(`최종스테이지 변경 다시시작!`);
  };

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    if (stage > lastStage) {
      clearInterval(timer);
      gameReset('ARRIVE LAST STAGE!!');
    }
    if (time < 1) {
      clearInterval(timer);
      gameReset('GAME OVER!!');
    }
    return () => {
      clearInterval(timer);
    };
  }, [time]);

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
