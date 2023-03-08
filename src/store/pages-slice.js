import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    info: {},
    pageIndex: 0,
  },
  reducers: {
    changePage(state, action) {
      state.info = action.payload;
    },
    changePageIndex(state, action) {
      console.log(action.payload)
      state.pageIndex = action.payload;
    },
  },
});

export const pagesActions = pagesSlice.actions;

export default pagesSlice;
