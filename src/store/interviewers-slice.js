import { createSlice } from "@reduxjs/toolkit";

const interviewersSlice = createSlice({
  name: "interviewers",
  initialState: {
    info: [],
    changed: false,
    interviewerSelected: null,
  },
  reducers: {
    editInterviewer(state, action) {
      const userId = action.payload.id;
      const newName = action.payload.name;
      const newEid = action.payload.eid;
      const userToEdit = state.info.find((user) => user.id === userId);
      userToEdit.name = newName;
      userToEdit.eid = newEid;
    },
    addUserToInterviewers(state, action) {
      const newUser = action.payload;
      const existingUser = state.info.find((user) => user.id === newUser.id);
      state.changed = true;
      if (existingUser) return state;
      state.info.push({
        id: newUser.id,
        name: newUser.name,
        eid: newUser.eid,
        interviewed: 0,
      });
    },
    removeUserFromInterviewers(state, action) {
      const id = action.payload;
      state.info = state.info.filter((user) => user.id !== id);
      state.changed = true;
    },
    selectInterviewer(state, action) {
      state.interviewerSelected = action.payload;
      state.changed = true;
    },
  },
});

export const interviewersActions = interviewersSlice.actions;

export default interviewersSlice;
