import React, { useEffect, useState } from 'react';
import '../css/gameZone.css';

// 중요 기본값
const MAX_COLOR = 230;

// 공용 함수
const getRandomNumber = (maxNumber: number) => {
  return Math.floor(Math.random() * maxNumber);
};

// 컴포넌트
type GameZoneType = (props: {
  stage: number;
  onClick: (event: any) => void;
  lastStage: number;
}) => JSX.Element;

const GameZone: GameZoneType = ({ stage, onClick, lastStage }) => {
  const [randomRgb1, setRandomRgb1] = useState(getRandomNumber(MAX_COLOR));
  const [randomRgb2, setRandomRgb2] = useState(getRandomNumber(MAX_COLOR));
  const [randomRgb3, setRandomRgb3] = useState(getRandomNumber(MAX_COLOR));

  const block = Math.pow(Math.floor((stage + 1) / 2) + 1, 2);
  const [randomIndex, setRandomIndex] = useState(getRandomNumber(block));

  const diffrentColorGap = lastStage * 2 - stage * 2;

  useEffect(() => {
    setRandomRgb1(getRandomNumber(MAX_COLOR));
    setRandomRgb2(getRandomNumber(MAX_COLOR));
    setRandomRgb3(getRandomNumber(MAX_COLOR));
    setRandomIndex(getRandomNumber(block));
  }, [stage, block]);

  const newStyle = {
    backgroundColor: `rgb(${randomRgb1}, ${randomRgb2} ,${randomRgb3})`,
    width: `${Math.floor(340 / Math.pow(block, 0.5)) + 0.7}px`,
    height: `${Math.floor(340 / Math.pow(block, 0.5)) + 0.7}px`,
  };
  const diffrentStyle = {
    ...newStyle,
    backgroundColor: `rgb(
    ${randomRgb1 - diffrentColorGap}, 
    ${randomRgb2 - diffrentColorGap} ,
    ${randomRgb3 - diffrentColorGap})`,
  };

  return (
    <div className="game-board">
      {[...Array(block)].map((_, index) => {
        if (randomIndex === index) {
          return (
            <div
              style={diffrentStyle}
              key={index}
              data-id="diffrent"
              onClick={onClick}
            ></div>
          );
        }
        return (
          <div
            style={newStyle}
            key={index}
            data-id="equivalent"
            onClick={onClick}
          ></div>
        );
      })}
    </div>
  );
};

export default GameZone;
