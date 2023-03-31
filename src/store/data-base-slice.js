import { createSlice } from "@reduxjs/toolkit";

const dataBaseSlice = createSlice({
  name: "dataBase",
  initialState: {
    isInitialized: false
  },
  reducers: {
    setInitialized(state, action) {
      state.isInitialized = action.payload;
    },
  },
});

export const dataBaseActions = dataBaseSlice.actions;

export default dataBaseSlice;
