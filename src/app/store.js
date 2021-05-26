import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//The global store setup: users....   >>> in slice folder
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
