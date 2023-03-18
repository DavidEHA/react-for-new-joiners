import { Typography } from "@mui/material";
import { interviewList } from "../utils/interview-list";
import InterviewComments from "../components/interview/InterviewComments";
import Header from "../components/UI/Header";
import QuestionsSelector from "../components/interview/QuestionsSelector";
import BottomButtons from "../components/UI/BottomButtons";
import InterviewButtons from "../components/interview/InterviewButtons";
import { useInterview } from "../custom-hooks/useInterview";

const Interview = () => {
  const {
    questionIndex,
    comments,
    updateComment,
    isCorrect,
    submitAnswer,
    updateAnswer,
  } = useInterview();

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
        <InterviewButtons
          isCorrect={isCorrect}
          updateAnswer={updateAnswer}
          submitAnswer={submitAnswer}
        />
        <InterviewComments comments={comments} updateComment={updateComment} />
        <QuestionsSelector submitAnswer={submitAnswer} />
      </div>
      <BottomButtons />
    </>
  );
};

export default Interview;
