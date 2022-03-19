import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import random from "./slice/random";

export const getRandomState = state => state.random;

export const store = configureStore(
  {
    reducer: {
      random,
    },
  },
  composeWithDevTools(
  )
);
