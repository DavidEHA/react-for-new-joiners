import { createSlice } from "@reduxjs/toolkit";

const bottomButtonsSlice = createSlice({
  name: "bottomButtons",
  initialState: {
    rightButtonDisabled: true,
    rightButtonTitle: "Continue",
    showRightButton: false,
    showRightButtonIcon: true,
    showLeftButton: false,
  },
  reducers: {
    toggleRightButtonDisabled(state, action) {
      state.rightButtonDisabled = action.payload
    },
    changeRightButtonTitle(state, action) {
      state.rightButtonTitle = action.payload;
    },
    toggleShowRightButton(state, action) {
      state.showRightButton = action.payload;
    },
    toggleShowRightButtonIcon(state, action) {
      state.showRightButtonIcon = action.payload;
    },
    toggleShowLeftButton(state, action) {
      state.showLeftButton = action.payload;
    },
  },
});

export const bottomButtonsActions = bottomButtonsSlice.actions;

export default bottomButtonsSlice;
