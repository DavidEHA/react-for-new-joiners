import { createSlice } from "@reduxjs/toolkit";

const candidatesSlice = createSlice({
  name: "candidates",
  initialState: {
    info: [],
    changed: false,
    candidateSelected: null,
  },
  reducers: {
    replaceCandidates(state, action) {
      state.info = action.payload.info;
      state.candidateSelected = action.payload.candidateSelected;
    },
    editCandidate(state, action) {
      state.changed = true;
      const userId = action.payload.id;
      const newName = action.payload.name;
      const newEmail = action.payload.email;
      const newType = action.payload.type;
      const userToEdit = state.info.find((user) => user.id === userId);
      userToEdit.name = newName;
      userToEdit.email = newEmail;
      userToEdit.type = newType;
    },
    addSkills(state, action) {
      state.changed = true;
      const userId = action.payload.id;
      const newSkills = action.payload.skills;
      const userToEdit = state.info.find((user) => user.id === userId);
      userToEdit.skills = newSkills;
    },
    addInterviewComments(state, action) {
      state.changed = true;
      const userId = action.payload.id;
      const newComments = action.payload.comments;
      const userToEdit = state.info.find((user) => user.id === userId);
      userToEdit.interviewComments = newComments;
    },
    addUserToCandidates(state, action) {
      state.changed = true;
      const newUser = action.payload;
      const existingUser = state.info.find((user) => user.id === newUser.id);
      if (existingUser) return state;
      state.info.push({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        type: newUser.type,
        interviewedBy: newUser.interviewedBy || "",
        interviewSummary: [],
        interviewComments: "",
        skills: [],
      });
    },
    removeUserFromCandidates(state, action) {
      state.changed = true;
      const id = action.payload;
      state.info = state.info.filter((user) => user.id !== id);
    },
    selectCandidate(state, action) {
      state.changed = true;
      state.candidateSelected = action.payload;
    },
    uploadAnswer(state, action) {
      state.changed = true;
      const userId = action.payload.userId;
      const newAnswer = action.payload.answer;
      const newComment = action.payload.comments;
      const questionId = action.payload.questionId;
      const newQuestion = action.payload.question;
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
