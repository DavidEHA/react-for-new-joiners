import CandidateInfo from "../components/interview/summary/CandidateInfo";
import SkillsList from "../components/interview/summary/SkillsList";
import QuestionsSummary from "../components/interview/summary/QuestionsSummary";
import GeneralComments from "../components/interview/summary/GeneralComments";

const Summary = () => {
  return (
    <>
      <div className="summary-container">
        <div className="summary-categories">
          <CandidateInfo />
          <SkillsList />
          <QuestionsSummary />
        </div>
        <GeneralComments />
      </div>
    </>
  );
};

export default Summary;
