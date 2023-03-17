import SummaryDialog from "./dialog/SummaryDialog";

const QuestionsSummary = () => {
  const questions = [
    {
      key: 0,
      topic: "React JS",
      answer: false,
    },
    {
      key: 1,
      topic: "React JS",
      answer: true,
    },
  ];
  return (
    <div className="summary-content">
      <div className="questions-header">
        <div> Questions Correct </div>
        <SummaryDialog />
      </div>

      <hr style={{ width: "100%", marginBottom: "1.5rem" }} />
      {questions.map((result) => (
        <div key={result.key} className="questions">
          <div>{result.topic}</div>
          <div style={result.answer ? { color: "green" } : { color: "red" }}>
            <i>{result.answer ? "Correct" : "Incorrect"} </i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionsSummary;
