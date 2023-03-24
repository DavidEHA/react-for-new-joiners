import { createSlice } from "@reduxjs/toolkit";

const candidatesSlice = createSlice({
  name: "candidates",
  initialState: {
    info: [],
    changed: false,
    candidateSelected: null,
  },
  reducers: {
    editCandidate(state, action) {
      const userId = action.payload.id;
      const newName = action.payload.name;
      const newEmail = action.payload.email;
      const newType = action.payload.type;
      const userToEdit = state.info.find((user) => user.id === userId);
      userToEdit.name = newName;
      userToEdit.email = newEmail;
      userToEdit.type = newType;
    },
    addUserToCandidates(state, action) {
      const newUser = action.payload;
      const existingUser = state.info.find((user) => user.id === newUser.id);
      state.changed = true;
      if (existingUser) return state;
      state.info.push({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        type: newUser.type,
        interviewedBy: newUser.interviewedBy,
        interviewSummary: [],
        skills:[]
      });
    },
    removeUserFromCandidates(state, action) {
      const id = action.payload;
      state.info = state.info.filter((user) => user.id !== id);
      state.changed = true;
    },
    selectCandidate(state, action) {
      state.candidateSelected = action.payload;
      state.changed = true;
    },
    uploadAnswer(state, action) {
      const userId = action.payload.userId;
      const newAnswer = action.payload.answer;
      const newComment = action.payload.comments;
      const questionId = action.payload.questionId;
      const newQuestion = action.payload.question
      const existingUser = state.info.find((user) => user.id === userId);
      if (!existingUser) return;
      const questionToEdit = existingUser.interviewSummary.find(
        (question) => question.id === questionId
      );
      if (questionToEdit) {
        questionToEdit.answer = newAnswer;
        questionToEdit.comments = newComment;
        return;
      }
      state.info[userId].interviewSummary.push({
        id: questionId,
        question: newQuestion,
        answer: newAnswer,
        comments: newComment,
      });
    },
  },
});

export const candidatesActions = candidatesSlice.actions;

export default candidatesSlice;
