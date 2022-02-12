import React from 'react';
import '../css/gameProgressInformation.css';

type GameProgressInformationType = (props: {
  stage: number;
  time: number;
  score: number;
  onChange: (changeValue: string) => void;
}) => JSX.Element;

const GameProgressInformation: GameProgressInformationType = ({
  stage,
  time,
  score,
  onChange,
}) => {
  const handleLastStageChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <header>
      <span>
        스테이지: {stage}, 남은 시간: {time}, 점수: {score}
      </span>
      <form className="lastStage-from">
        <label htmlFor="lastStage">최종 스테이지</label>
        <input
          type="number"
          id="lastStage"
          onChange={handleLastStageChange}
          value={25}
          min={20}
          max={50}
        />
      </form>
    </header>
  );
};

export default GameProgressInformation;
