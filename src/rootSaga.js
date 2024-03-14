import { all, fork } from "redux-saga/effects";

import { watchFetchExampleTasks } from "./features/fetchTasksSaga";

export function* rootSaga() {
  yield all([fork(watchFetchExampleTasks)]);
}

