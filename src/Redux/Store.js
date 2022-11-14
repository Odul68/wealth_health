import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./Reducer";

export const store = configureStore({ reducer: { employee: employeeReducer } });
