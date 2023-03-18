import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { interviewActions } from "../store/interview-slice";
import { useParams } from "react-router-dom";
import { bottomButtonsActions } from "../store/bottom-buttons-slice";
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
    ({ isLastQuestion, lastComment, lastAnswer }) => {
      const answer = {
        id: id,
        answer: isLastQuestion ? lastAnswer : isCorrect,
        comments: isLastQuestion ? lastComment : comments,
      };
      dispatch(interviewActions.uploadAnswer(answer));
      setUpdated(true);
      if (isLastQuestion) return;
      setComment(null);
      setIsCorrect(null);
    },
    [dispatch, id, isCorrect, comments]
  );

  const updateComment = (text, isUpdated) => {
    setComment(text);
    setUpdated(isUpdated);
    if (id === "8") {
      submitAnswer({
        isLastQuestion: true,
        lastComment: text,
        lastAnswer: isCorrect,
      });
    }
  };

  const updateAnswer = (answer, isUpdated) => {
    const isCorrect = JSON.parse(answer);
    setIsCorrect(isCorrect);
    setUpdated(isUpdated);
    if (id === "8") {
      submitAnswer({
        isLastQuestion: true,
        lastComment: comments,
        lastAnswer: isCorrect,
      });
    }
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
