import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import tasksReducer from "./features/tasks/tasksSlice";
import { rootSaga } from "./rootSaga";
import { getStateFromLocalStorage } from "./localStorageUtils";
import { localStorageKey } from "./features/tasks/localStorageKey"

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { tasks: tasksReducer },
  preloadedState: getStateFromLocalStorage(localStorageKey),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
