import { Fab } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';

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
      <div
        className="questions-header"
      >
       <div> Questions Correct </div>
        <Fab
          title={`See summary`}
          color="primary"
          style={{ marginBottom: "-28px"}}
          // onClick={openModal}
        >
          <DescriptionIcon />
        </Fab>
      </div>

      <hr style={{ width: "100%", marginBottom: "1.5rem" }} />
      {questions.map((result) => (
        <div className="questions">
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
