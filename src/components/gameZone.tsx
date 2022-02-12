import React, { useState } from 'react';
import '../css/gameZone.css';

const GameZone = (props: { stage: number; onClick: (event: any) => void }) => {
  const block = Math.pow(Math.floor(props.stage / 2) + 1, 2);

  const randomIndex = Math.floor(Math.random() * block);
  console.log(`stage: ${props.stage}, block: ${block}`);

  const randomRgb1 = Math.floor(Math.random() * 230);
  const randomRgb2 = Math.floor(Math.random() * 230);
  const randomRgb3 = Math.floor(Math.random() * 230);
  const diffrentColorGap = 60 - props.stage * 2;
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
              onClick={props.onClick}
            ></div>
          );
        }
        return (
          <div
            style={newStyle}
            key={index}
            data-id="equivalent"
            onClick={props.onClick}
          ></div>
        );
      })}
    </div>
  );
};

export default GameZone;
