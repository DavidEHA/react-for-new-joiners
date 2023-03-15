import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { interviewActions } from "../../store/interview-slice";
import { useParams } from "react-router-dom";
import { bottomButtonsActions } from "../../store/bottom-buttons-slice";
import { useCallback } from "react";

export const useInterview = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [comments, setComment] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const questions = useSelector((state) => state.interview.questions);
  const rightButtonDisabled = useSelector(
    (state) => state.bottomButtons.rightButtonDisabled
  );

  const submitAnswer = useCallback(() => {
    console.log(id);
    const question = questions.find((question) => question.id === id);
    console.log(question);
    if (id === undefined) return;
    const answer = {
      id: id,
      answer: isCorrect,
      comments: comments,
    };
    dispatch(interviewActions.uploadAnswer(answer));
    setComment(null);
    setIsCorrect(null);
  }, [comments, dispatch, isCorrect, questions, id]);

  const updateComment = (text) => {
    setComment(text);
  };

  const updateAnswer = (answer) => {
    const isCorrect = JSON.parse(answer);
    setIsCorrect(isCorrect);
  };

  if (questions.length === 8 && rightButtonDisabled && id !== undefined) {
    dispatch(bottomButtonsActions.toggleRightButtonDisabled(false));
  }

console.log(isCorrect)
  if (questions.length === 7 && !readyToSubmit && isCorrect !== null ) setReadyToSubmit(true);
  if (questions.length !== 7 && readyToSubmit && isCorrect !== null) setReadyToSubmit(false);

  console.log(questions)

  return {
    submitAnswer,
    updateAnswer,
    updateComment,
    comments,
    isCorrect,
    id,
    readyToSubmit,
  };
};
