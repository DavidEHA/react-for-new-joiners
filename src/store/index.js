import { configureStore } from "@reduxjs/toolkit";

import interviewersSlice from "./header-slice";
import candidatesSlice from "./candidates-slice";
import headerSlice from "./header-slice";

const store = configureStore({
  reducer: {
    interviewers: interviewersSlice.reducer,
    candidates: candidatesSlice.reducer,
    header: headerSlice.reducer,
  },
});

export default store;
