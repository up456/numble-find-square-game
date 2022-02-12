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
    }
  };

  return (
    <>
      <GameProgressInformation stage={stage} time={time} score={score} />
      <GameZone stage={stage} onClick={handleClickSquare} />
    </>
  );
}

export default App;
