import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { interviewActions } from "../../store/interview-slice";
import { useParams } from "react-router-dom";
import { bottomButtonsActions } from "../../store/bottom-buttons-slice";
import { useCallback, useEffect } from "react";

export const useInterview = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const questionIndex = id - 1;
  const [comments, setComment] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [updated, setUpdated] = useState(true);
  const questions = useSelector((state) => state.interview.questions);
  const rightButtonDisabled = useSelector(
    (state) => state.bottomButtons.rightButtonDisabled
  );

  const submitAnswer = useCallback(
    ({ isLastQuestion }) => {
      const answer = {
        id: id,
        answer: isCorrect,
        comments: comments,
      };
      dispatch(interviewActions.uploadAnswer(answer));
      setUpdated(true);
      if (isLastQuestion) return;
      setComment(null);
      setIsCorrect(null);
    },
    [comments, dispatch, isCorrect, id]
  );

  const updateComment = (text, isUpdated) => {
    setComment(text);
    setUpdated(isUpdated)
  };

  const updateAnswer = (answer, isUpdated) => {
    const isCorrect = JSON.parse(answer);
    setIsCorrect(isCorrect);
    setUpdated(isUpdated)
  };

  useEffect(() => {
    if (questions.length === 8 && rightButtonDisabled && updated) {
      dispatch(bottomButtonsActions.toggleRightButtonDisabled(false));
    }
    if (questions.length === 8 && !rightButtonDisabled && !updated) {
      dispatch(bottomButtonsActions.toggleRightButtonDisabled(true));
    }
  }, [questions, rightButtonDisabled, dispatch, updated]);

  return {
    submitAnswer,
    updateAnswer,
    updateComment,
    comments,
    isCorrect,
    questionIndex,
  };
};
