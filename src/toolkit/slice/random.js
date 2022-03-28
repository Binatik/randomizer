import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  min: 0,
  max: 100,
  quantity: 1,
  numbers: [],
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

    setDuantity(state, action) {
      state.quantity = action.payload;
    },

    getRandom(state) {
      state.numbers.length = 0;
      let { min, max, quantity } = state;

      for (let i = 0; i < quantity; i++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        state.numbers.push(Math.floor(Math.random() * (max - min)) + min);
      }
    },
  },
});

export const { setValueMin, setValueMax, setDuantity, getRandom } = random.actions;
export default random.reducer;
