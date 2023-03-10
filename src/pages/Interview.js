import { Typography } from "@mui/material";
import { interviewList } from "../utils/interview-list";
import { InterviewButtons } from "../components/interview/InterviewButtons";
import { InterviewComments } from "../components/interview/InterviewComments";
import Header from "../components/UI/Header"

const Interview = () => {
  const questionNumber = 1;
  return (
    <>
    <Header/>
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
        <InterviewButtons/>
        <InterviewComments/>
      </div>
    </>
  );
};

export default Interview;
