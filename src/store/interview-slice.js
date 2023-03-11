import { createSlice } from "@reduxjs/toolkit";

const interviewSlice = createSlice({
  name: "interview",
  initialState: {
    questions: [],
  },
  reducers: {
    uploadResult(state, action) {
      const newResult = action.payload.result;
      const newComment = action.payload.comments;
      const questionId = action.payload.id;
      const questionToEdit = state.questions.find(
        (question) => question.id === questionId
      );
      if (questionToEdit) {
        questionToEdit.result = newResult;
        questionToEdit.comments = newComment;
        return;
      }
      state.questions.push({
        id: questionId,
        result: newResult,
        comments: newComment,
      });
    },
  },
});

export const interviewActions = interviewSlice.actions;

export default interviewSlice;
