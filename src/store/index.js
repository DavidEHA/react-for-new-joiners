import { configureStore } from "@reduxjs/toolkit";
import interviewersSlice from "./interviewers-slice";
import candidatesSlice from "./candidates-slice";
import headerSlice from "./header-slice";
import bottomButtonsSlice from "./bottom-buttons-slice";
import modalSlice from "./modal-slice";
import pagesSlice from "./pages-slice";
import cardsSlice from "./cards-slice";

const store = configureStore({
  reducer: {
    interviewers: interviewersSlice.reducer,
    candidates: candidatesSlice.reducer,
    header: headerSlice.reducer,
    bottomButtons: bottomButtonsSlice.reducer,
    modal: modalSlice.reducer,
    pages: pagesSlice.reducer,
    cards: cardsSlice.reducer

  },
});

export default store;
