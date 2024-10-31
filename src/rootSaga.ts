import { all, fork } from "redux-saga/effects";

import { watchFetchExampleTasks } from "./features/tasks/watchFetchTasksSaga";
import { watchTasksChanges } from "./features/tasks/watchTasksChangesSaga";

export function* rootSaga() {
  yield all([fork(watchFetchExampleTasks), fork(watchTasksChanges)]);
}
