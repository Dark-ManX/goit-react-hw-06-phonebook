import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: ({ filterValue }, { payload }) => (filterValue = payload),
  },
});

export const { setFilter } = filter.actions;
export default filter.reducer;
