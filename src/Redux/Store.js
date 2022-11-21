import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./Reducer";
// import { getDefaultMiddleware } from '@reduxjs/toolkit';

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

export const store = configureStore({
  reducer: { employee: employeeReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
