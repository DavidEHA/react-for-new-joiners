import { Typography } from "@mui/material";
import { interviewList } from "../utils/interview-list";
import { InterviewButtons } from "../components/interview/InterviewButtons";
import { InterviewComments } from "../components/interview/InterviewComments";
import Header from "../components/UI/Header";
import QuestionSelector from "../components/interview/QuestionSelector";
import { useParams } from "react-router";

const Interview = () => {
  const { id } = useParams();
  const questionNumber = parseInt(id || 1) - 1;

  return (
    <>
      <Header />
      <div className="registration-content">
        <Typography sx={{ mt: 4, fontSize: 22, fontWeight: "bold" }}>
          {interviewList[questionNumber].topic}
        </Typography>
        <Typography
          sx={{ mt: 2, fontSize: 14, fontWeight: "bold" }}
          gutterBottom
        >
          {interviewList[questionNumber].question}
        </Typography>
        <InterviewButtons />
        <InterviewComments />
        <QuestionSelector />
      </div>
    </>
  );
};

export default Interview;
