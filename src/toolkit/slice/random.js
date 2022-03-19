import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  min: 0,
  max: 0,
  number: 0,
};

const random = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setValueMin(state, action) {
      state.min = action.payload;
    },
    setValueMax(state, action) {
      state.max = action.payload;
    },

    setNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const { setValueMin, setValueMax, setNumber } = random.actions;
export default random.reducer;
