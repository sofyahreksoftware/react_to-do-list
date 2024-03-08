import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";

import { getStateFromLocalStorage } from "./localStorageUtils";

export const store = configureStore({
  reducer: { tasks: tasksReducer },
  preloadedState: getStateFromLocalStorage("tasks"),
});
