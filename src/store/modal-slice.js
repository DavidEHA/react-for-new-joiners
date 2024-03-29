import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    userType:"interviewer",
    rightButtonName: "Save",
    leftButtonName: "Cancel",
    edit: false
  },
  reducers: {
    toggleOpenModal(state, action) {
      state.open = action.payload
    },
    changeUserType(state, action) {
      state.userType = action.payload
    },
    changeModalRigthButtonName(state, action) {
      state.rightButtonName = action.payload
    },
    changeModalLeftButtonName(state, action) {
      state.leftButtonName = action.payload
    },
    toggleEdit(state, action) {
      state.edit = action.payload
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
