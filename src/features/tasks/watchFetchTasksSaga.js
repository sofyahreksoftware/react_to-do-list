import { delay, call, put, takeLatest } from "redux-saga/effects";

import { getExampleTasks } from "./getExampleTasks";
import {
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} from "./tasksSlice";

function* fetchExampleTasksHandler() {
  const fetchedTasks = yield call(getExampleTasks);

  if (fetchedTasks) {
    yield delay(3000);
    yield put(fetchExampleTasksSuccess(fetchedTasks));
  } else {
    yield put(fetchExampleTasksError);
  }
}

export function* watchFetchExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}
