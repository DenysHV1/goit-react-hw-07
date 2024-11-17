import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});


const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;

export default filterReducer;
