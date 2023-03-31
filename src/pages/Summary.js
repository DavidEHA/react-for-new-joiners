import CandidateInfo from "../components/interview/summary/CandidateInfo";
import SkillsList from "../components/interview/summary/SkillsList";
import QuestionsSummary from "../components/interview/summary/QuestionsSummary";
import GeneralComments from "../components/interview/summary/GeneralComments";
import { useSelector } from "react-redux";

const Summary = () => {
  const pageIndex = useSelector((state) => state.pages.pageIndex);

  return (
    <>
      {pageIndex === 5 && (
        <div className="summary-container">
          <div className="summary-categories">
            <CandidateInfo />
            <SkillsList />
            <QuestionsSummary />
          </div>
          <GeneralComments />
        </div>
      )}
    </>
  );
};

export default Summary;
