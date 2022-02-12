import '../css/gameProgressInformation.css';

// 중요 기본값
const MIN_STAGE = 20;
const MAX_STAGE = 50;

// 컴포넌트
type GameProgressInformationType = (props: {
  stage: number;
  time: number;
  score: number;
  onChange: (changeValue: string) => void;
  defaultLastStage: number;
}) => JSX.Element;

const GameProgressInformation: GameProgressInformationType = ({
  stage,
  time,
  score,
  onChange,
  defaultLastStage,
}) => {
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
          placeholder={String(defaultLastStage)}
          min={MIN_STAGE}
          max={MAX_STAGE}
        />
        <button className="btn">변경</button>
      </form>
    </header>
  );
};

export default GameProgressInformation;
