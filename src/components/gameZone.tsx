import React from 'react';
import '../css/gameZone.css';

const GameZone = (props: {
  style: { backgroundColor: string; width: string; height: string };
  block: number;
  stage: number;
  onClick: (event: any) => void;
}) => {
  const randomIndex = Math.floor(Math.random() * props.block);

  return (
    <div className="game-board">
      {[...Array(props.block)].map((_, index) => {
        if (randomIndex === index) {
          const diffrentStyle = { ...props.style, backgroundColor: 'red' };
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
            style={props.style}
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
