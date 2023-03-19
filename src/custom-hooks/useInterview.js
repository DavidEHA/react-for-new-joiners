import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { candidatesActions } from "../store/candidates-slice";
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
  const candidateSelected = useSelector(
    (state) => state.candidates.candidateSelected
  );
  const candidates = useSelector((state) => state.candidates.info);
  const candidate = candidates.find(
    (candidate) => candidate.id === candidateSelected
  );
  const questions = candidate.interviewSummary;
  const question = questions.find((question) => question.id === id);
  const rightButtonDisabled = useSelector(
    (state) => state.bottomButtons.rightButtonDisabled
  );

  const submitAnswer = useCallback(
    ({ isLastQuestion, lastComment, lastAnswer }) => {
      const answer = {
        questionId: id,
        userId: candidateSelected,
        answer: isLastQuestion ? lastAnswer : isCorrect,
        comments: isLastQuestion ? lastComment : comments,
      };
      dispatch(candidatesActions.uploadAnswer(answer));
      setUpdated(true);
      if (isLastQuestion) return;
      setComment(null);
      setIsCorrect(null);
    },
    [dispatch, id, isCorrect, comments, candidateSelected]
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
    question
  };
};
