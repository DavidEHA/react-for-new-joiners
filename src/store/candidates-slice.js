import { createSlice } from "@reduxjs/toolkit";

const candidatesSlice = createSlice({
  name: "candidates",
  initialState: {
    info: [],
    changed: false,
    candidateSelected: null
  },
  reducers: {
    replaceCandidates(state, action) {
      state.info = action.payload.info;
    },
    addUserToCandidates(state, action) {
      const newUser = action.payload;
      const existingUser = state.info.find((user) => user.id === newUser.id);
      state.changed = true;
      if (existingUser) return state
      state.info.push({
        id: newUser.id,
        name: newUser.name,
        eMail: newUser.eMail,
        type: newUser.type,
        interviewedBy: newUser.interviewedBy
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
  },
});

export const candidatesActions = candidatesSlice.actions;

export default candidatesSlice;
