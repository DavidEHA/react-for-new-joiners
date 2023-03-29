import { createSlice } from "@reduxjs/toolkit";

const interviewersSlice = createSlice({
  name: "interviewers",
  initialState: {
    info: [],
    changed: false,
    interviewerSelected: null,
  },
  reducers: {
    replaceInterviewers(state, action) {
      state.info = action.payload.info;
      state.interviewerSelected = action.payload.interviewerSelected;
    },
    editInterviewer(state, action) {
      state.changed = true;
      const userId = action.payload.id;
      const newName = action.payload.name;
      const newEid = action.payload.eid;
      const userToEdit = state.info.find((user) => user.id === userId);
      userToEdit.name = newName;
      userToEdit.eid = newEid;
    },
    addUserToInterviewers(state, action) {
      state.changed = true;
      const newUser = action.payload;
      const existingUser = state.info.find((user) => user.id === newUser.id);
      if (existingUser) return state;
      state.info.push({
        id: newUser.id,
        name: newUser.name,
        eid: newUser.eid,
      });
    },
    removeUserFromInterviewers(state, action) {
      state.changed = true;
      const id = action.payload;
      state.info = state.info.filter((user) => user.id !== id);
    },
    selectInterviewer(state, action) {
      state.changed = true;
      state.interviewerSelected = action.payload;
    },
  },
});

export const interviewersActions = interviewersSlice.actions;

export default interviewersSlice;
