import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    info: {},
    pageIndex: 5,
  },
  reducers: {
    changePage(state, action) {
      state.info = action.payload;
    },
    changePageIndex(state, action) {
      state.pageIndex = action.payload;
    },
  },
});

export const pagesActions = pagesSlice.actions;

export default pagesSlice;
