import { takeEvery, select, call } from "redux-saga/effects";

import { saveStateToLocalStorage } from "../../localStorageUtils";
import { localStorageKey } from "./localStorageKey";
import { selectTasksState } from "./tasksSlice";

function* saveTasksInLocalStorageHandler() {
  const tasksState = yield select(selectTasksState);
  yield call(saveStateToLocalStorage, localStorageKey, tasksState);
}

export function* watchTasksChanges() {
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
