import { useEffect, useState } from 'react';
import GameProgressInformation from './components/gameProgressInformation';
import GameZone from './components/gameZone';
import './css/app.css';

function App() {
  const [stage, setStage] = useState(1);
  const [time, setTime] = useState(15);
  const [score, setScore] = useState(0);
  const [lastStage, setLastStage] = useState(20);

  const handleClickSquare = (event: any) => {
    if (event.target.dataset.id === 'equivalent') {
      setTime((prevTime) => prevTime - 3);
    } else {
      setStage((prevStage) => prevStage + 1);
      setScore((prevScore) => prevScore + stage * stage * time);
      setTime(15);
    }
  };

  const gameReset = (message: string) => {
    alert(`${message}
스테이지:${stage}, 점수:${score}`);
    setStage(1);
    setTime(15);
    setScore(0);
  };

  const handleLastStageChange = (changeValue: string) => {
    setLastStage(Number(changeValue));
    gameReset('최종스테이지 변경 다시시작');
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
