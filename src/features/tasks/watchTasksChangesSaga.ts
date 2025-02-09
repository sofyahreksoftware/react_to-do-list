import { takeEvery, select, call } from "redux-saga/effects";

import { TaskProps, TasksStateProps } from "./types";
import { saveStateToLocalStorage } from "./localStorageUtils";
import { selectTasks, selectTasksHidden } from "./tasksSlice";
import { toggleHideDone } from "./tasksSlice";

function* saveTasksHiddenInLocalStorageHandler() {
  const tasksHidden: TasksStateProps["tasksHidden"] = yield select(
    selectTasksHidden
  );
  yield call(saveStateToLocalStorage, "tasksHidden", tasksHidden);
}

function* saveTasksInLocalStorageHandler() {
  const tasks: TaskProps[] = yield select(selectTasks);
  yield call(saveStateToLocalStorage, "tasks", tasks);
}

export function* watchTasksChanges() {
  yield takeEvery("*", saveTasksInLocalStorageHandler);
  yield takeEvery(toggleHideDone.type, saveTasksHiddenInLocalStorageHandler);
}
