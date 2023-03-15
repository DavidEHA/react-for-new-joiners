import { createSlice } from "@reduxjs/toolkit";

const interviewSlice = createSlice({
  name: "interview",
  initialState: {
    questions: [],
  },
  reducers: {
    uploadAnswer(state, action) {
      const newAnswer = action.payload.answer;
      const newComment = action.payload.comments;
      const questionId = action.payload.id;
      const questionToEdit = state.questions.find(
        (question) => question.id === questionId
      );
      if (questionToEdit) {
        questionToEdit.answer = newAnswer;
        questionToEdit.comments = newComment;
        return;
      }
      state.questions.push({
        id: questionId,
        answer: newAnswer,
        comments: newComment,
      });
    },
  },
});

export const interviewActions = interviewSlice.actions;

export default interviewSlice;
