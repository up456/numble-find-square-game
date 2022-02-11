import { useEffect, useState } from 'react';
import GameProgressInformation from './components/gameProgressInformation';
import GameZone from './components/gameZone';
import './css/app.css';

function App() {
  const [stage, setStage] = useState(1);
  const [time, setTime] = useState(15);
  const [score, setScore] = useState(0);
  const [block, setBlock] = useState(4);
  const [style, setStyle] = useState({
    backgroundColor: 'aquamarine',
    width: '175px',
    height: '175px',
  });

  const handleClickSquare = (event: any) => {
    if (event.target.dataset.id === 'equivalent') {
      setTime((prevTime) => prevTime - 3);
    } else {
      setStage((prevStage) => prevStage + 1);
      if (stage > 1) {
        const newBlock = Math.pow(Math.floor(stage + 1 / 2 + 1), 2);
        setBlock((prevBlock) => (prevBlock = newBlock));
      }
    }
  };

  useEffect(() => {
    if (stage > 1 && stage < 14) {
      const newStyle = {
        backgroundColor: 'rgb(0, 0 ,0)',
        width: `${Math.floor(340 / Math.floor(stage + 1 / 2))}px`,
        height: `${Math.floor(340 / Math.floor(stage + 1 / 2))}px`,
      };
      setStyle((prevStyle) => (prevStyle = newStyle));
    }
  }, [stage]);

  return (
    <>
      <GameProgressInformation stage={stage} time={time} score={score} />
      <GameZone
        style={style}
        stage={stage}
        block={block}
        onClick={handleClickSquare}
      />
    </>
  );
}

export default App;
