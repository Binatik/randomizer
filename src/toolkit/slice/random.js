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

    getRandom(state) {
      let { min, max } = state;

      min = Math.ceil(min);
      max = Math.floor(max);

      state.number = Math.floor(Math.random() * (max - min)) + min;
    },
  },
});

export const { setValueMin, setValueMax, getRandom } = random.actions;
export default random.reducer;
