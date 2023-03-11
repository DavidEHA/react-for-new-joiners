import { Typography } from "@mui/material";
import { interviewList } from "../utils/interview-list";
import InterviewComments from "../components/interview/InterviewComments";
import Header from "../components/UI/Header";
import QuestionsSelector from "../components/interview/QuestionsSelector";
import { useParams } from "react-router";
import BottomButtons from "../components/UI/BottomButtons";
import InterviewButtons from "../components/interview/InterviewButtons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bottomButtonsActions } from "../store/bottom-buttons-slice";

const Interview = () => {
  const dispatch= useDispatch()
  const { id } = useParams();
  const questionNumber = parseInt(id || 1) - 1;
  const questions = useSelector((state) => state.interview.questions);
  const rightButtonDisabled = useSelector((state) => state.bottomButtons.rightButtonDisabled);

  if(questions.length > 0 && rightButtonDisabled){
    dispatch(bottomButtonsActions.toggleRightButtonDisabled(false))
  }

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
