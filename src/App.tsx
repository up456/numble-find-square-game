import { useEffect, useState } from 'react';
import GameProgressInformation from './components/gameProgressInformation';
import GameZone from './components/gameZone';
import './css/app.css';

function App() {
  const [stage, setStage] = useState(1);
  const [time, setTime] = useState(15);
  const [score, setScore] = useState(0);

  const handleClickSquare = (event: any) => {
    if (event.target.dataset.id === 'equivalent') {
      setTime((prevTime) => prevTime - 3);
    } else {
      setStage((prevStage) => prevStage + 1);
      setScore((prevScore) => prevScore + stage * stage * time);
      setTime(15);
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time < 1) {
      clearInterval(timer);
      alert(`GAME OVER!
스테이지:${stage}, 점수:${score}`);
      setStage(1);
      setTime(15);
      setScore(0);
    }
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <>
      <GameProgressInformation stage={stage} time={time} score={score} />
      <GameZone stage={stage} onClick={handleClickSquare} />
    </>
  );
}

export default App;
