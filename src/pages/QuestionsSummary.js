import { Typography } from "@mui/material";

const QuestionsSummary = () => {
  const questions = [
    {
      topic: "React JS",
      answer: false,
    },
    {
      topic: "React JS",
      answer: true,
    },
  ];
  return (
    <div className="summary-content">
      <Typography sx={{ fontSize: 18 }} color="text.primary">
        Questions correct
      </Typography>
      <hr style={{ width: "100%", marginBottom: "1.5rem" }} />
      {questions.map((result) => (
        <div className="questions">
          <div>{result.topic}</div>
          <div style={result.answer ? { color: "green" } : { color: "red" }}>
            {result.answer ? "True" : "False"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionsSummary;
