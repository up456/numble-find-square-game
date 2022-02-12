import React, { useRef } from 'react';
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
  const formRef = useRef();

  const handleLastStageChange = (event: any) => {
    event.preventDefault();
    onChange(event.target['lastStage'].value);
  };

  return (
    <header>
      <span>
        스테이지: {stage}, 남은 시간: {time}, 점수: {score}
      </span>
      <form className="lastStage-form" onSubmit={handleLastStageChange}>
        <label htmlFor="lastStage">
          <i className="fa-solid fa-gear"></i>최종스테이지
        </label>
        <input
          type="number"
          id="lastStage"
          placeholder="25"
          min={20}
          max={50}
        />
        <button className="btn">변경</button>
      </form>
    </header>
  );
};

export default GameProgressInformation;
