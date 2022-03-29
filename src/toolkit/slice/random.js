import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  min: 0,
  max: 100,
  quantity: 1,
  isNumber: true,
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

      min = Math.ceil(min);
      max = Math.floor(max);

      if (quantity > 0 && quantity < 1000) state.isNumber = true;
      else state.isNumber = false;

      if (state.isNumber) {
        for (let i = 0; i < quantity; i++) {
          state.numbers.push(Math.floor(Math.random() * (max - min)) + min);
        }
      }
    },
  },
});

export const { setValueMin, setValueMax, setDuantity, getRandom } = random.actions;
export default random.reducer;
