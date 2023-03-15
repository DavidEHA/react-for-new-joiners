import { Typography } from "@mui/material";
import { interviewList } from "../utils/interview-list";
import InterviewComments from "../components/interview/InterviewComments";
import Header from "../components/UI/Header";
import QuestionsSelector from "../components/interview/QuestionsSelector";
import BottomButtons from "../components/UI/BottomButtons";
import InterviewButtons from "../components/interview/InterviewButtons";
import { useInterview } from "../components/interview/useInterview";

const Interview = () => {
  const { id, comments, updateComment, isCorrect, submitAnswer, updateAnswer } =
    useInterview();
  const questionIndex = id - 1;

  return (
    <>
      <Header />
      <div className="registration-content">
        <Typography sx={{ mt: 4, fontSize: 22, fontWeight: "bold" }}>
          {interviewList[questionIndex].topic}
        </Typography>
        <Typography
          sx={{ mt: 2, fontSize: 14, fontWeight: "bold" }}
          gutterBottom
        >
          {interviewList[questionIndex].question}
        </Typography>
        <InterviewButtons isCorrect={isCorrect} updateAnswer={updateAnswer} />
        <InterviewComments comments={comments} updateComment={updateComment} />
        <QuestionsSelector submitAnswer={submitAnswer} />
      </div>
      <BottomButtons />
    </>
  );
};

export default Interview;
