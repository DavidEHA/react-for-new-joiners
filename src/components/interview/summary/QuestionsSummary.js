import SummaryDialog from "./dialog/SummaryDialog";
import { useSelector } from "react-redux";
import { interviewList } from "../../../utils/interview-list";

const QuestionsSummary = () => {
  const candidateSelected = useSelector(
    (state) => state.candidates.candidateSelected
  );
  const candidates = useSelector((state) => state.candidates.info);
  const candidate = candidates.find(
    (candidate) => candidate.id === candidateSelected
  );
  const questions = candidate.interviewSummary;
  return (
    <div className="summary-content">
      <div className="questions-header">
        <div> Questions Correct </div>
        <SummaryDialog />
      </div>

      <hr style={{ width: "100%", marginBottom: "1.5rem" }} />
      {questions.map((result) => (
        <div key={result.id} className="questions">
          <div>{interviewList[result.id - 1].topic}</div>
          <div style={result.answer ? { color: "green" } : { color: "red" }}>
            <i>{result.answer ? "Correct" : "Incorrect"} </i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionsSummary;
