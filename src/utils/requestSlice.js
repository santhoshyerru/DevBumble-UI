import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
    removeRequest: (state, action) => {
      const newFeed = state.filter((user) => user._id !== action.payload);
      return newFeed;

    },
  },
});

export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
