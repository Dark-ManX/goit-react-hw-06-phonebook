import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

export const contacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    onAdd: (state, { payload }) => {
      state.list = [...state.list, payload];
    },
    onRemove: (state, { payload }) => {
      console.log(payload);
      state.list = state.list.filter(({ id }) => id !== payload);
    },
  },
});

export const { onAdd, onRemove } = contacts.actions;
export default contacts.reducer;
