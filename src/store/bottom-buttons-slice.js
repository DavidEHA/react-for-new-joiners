import { createSlice } from "@reduxjs/toolkit";

const bottomButtonsSlice = createSlice({
  name: "bottomButtons",
  initialState: {
    rightButtonDisabled: true,
    rightButtonTitle: "Continue",
    showLeftButton: false,
  },
  reducers: {
    toggleRightButtonDisabled(state) {
      state.rightButtonDisabled = !state.rightButtonDisabled
    },
    changeRightButtonTitle(state, action) {
      state.rightButtonTitle = action.payload;
    },
    toggleShowLeftButton(state) {
      state.showLeftButton = !state.showLeftButton
    },
  },
});

export const bottomButtonsActions = bottomButtonsSlice.actions;

export default bottomButtonsSlice;
