import { createSlice } from "@reduxjs/toolkit";

const interviewersSlice = createSlice({
  name: "interviewers",
  initialState: {
    info: [],
    changed: false,
  },
  reducers: {
    replaceInterviewers(state, action) {
      state.info = action.payload.info;
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
  },
});

export const interviewersActions = interviewersSlice.actions;

export default interviewersSlice;
