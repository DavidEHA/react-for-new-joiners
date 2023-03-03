import { configureStore } from "@reduxjs/toolkit";
import interviewersSlice from "./interviewers-slice";
import candidatesSlice from "./candidates-slice";
import headerSlice from "./header-slice";
import bottomButtonsSlice from "./bottom-buttons-slice";
import modalSlice from "./modal-slice";

const store = configureStore({
  reducer: {
    interviewers: interviewersSlice.reducer,
    candidates: candidatesSlice.reducer,
    header: headerSlice.reducer,
    bottomButtons: bottomButtonsSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;
