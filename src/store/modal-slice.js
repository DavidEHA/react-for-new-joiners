import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    userType:"interviewer",
    rightButtonName: "Save"
  },
  reducers: {
    toggleOpenModal(state, action) {
      state.open = action.payload
    },
    changeUserType(state, action) {
      state.userType = action.payload
    },
    changeModalRigthButton(state, action) {
      state.rightButtonName = action.payload
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
