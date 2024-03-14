import { takeEvery, delay, call, put } from "redux-saga/effects";

import { getExampleTasks } from "./tasks/getExampleTasks";
import {
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} from "./tasks/tasksSlice";

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
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
