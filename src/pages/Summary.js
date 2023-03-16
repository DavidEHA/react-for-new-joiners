import CandidateInfo from "./CandidateInfo";
import SkillsList from "./SkillsList";
import QuestionsSummary from "./QuestionsSummary";

const Summary = () => {
  return (
    <div className="summary-container">
      <div className="summary-categories">
        <CandidateInfo />
        <SkillsList />
        <QuestionsSummary />
      </div>
    </div>
  );
};

export default Summary;
