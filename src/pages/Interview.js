import { Typography } from "@mui/material";
import { interviewList } from "../utils/interview-list";
import InterviewComments from "../components/interview/InterviewComments";
import Header from "../components/UI/Header";
import QuestionsSelector from "../components/interview/QuestionsSelector";
import { useParams } from "react-router";
import BottomButtons from "../components/UI/BottomButtons";
import InterviewButtons from "../components/interview/InterviewButtons";

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
        <InterviewButtons questionNumber={questionNumber}/>
        <InterviewComments />
        <QuestionsSelector />
      </div>
      <BottomButtons />
    </>
  );
};

export default Interview;
