import React from 'react';

type GameProgressInformationType = (props: {
  stage: number;
  time: number;
  score: number;
}) => JSX.Element;

const GameProgressInformation: GameProgressInformationType = ({
  stage,
  time,
  score,
}) => {
  return (
    <header>
      스테이지: {stage}, 남은 시간: {time}, 점수: {score}
    </header>
  );
};

export default GameProgressInformation;
