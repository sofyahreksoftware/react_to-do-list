import { takeEvery, select, call } from "redux-saga/effects";

import { saveStateToLocalStorage } from "../../localStorageUtils";
import { localStorageKey } from "./localStorageKey";
import { selectTasks } from "./tasksSlice";

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveStateToLocalStorage, localStorageKey, tasks);
}

export function* watchTasksChanges() {
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
