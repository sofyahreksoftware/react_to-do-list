import { createSlice, createSelector } from "@reduxjs/toolkit";

import { getStateFromLocalStorage } from "./localStorageUtils";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getStateFromLocalStorage("tasks", []),
    tasksHidden: getStateFromLocalStorage("tasksHidden", false),
    fetchTasksStatus: undefined,
  },
  reducers: {
    addNewTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    removeTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(index, 1);
    },

    toggleTaskDone: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);

      if (task) {
        task.done = !task.done;
      }
    },

    toggleHideDone: (state) => {
      const areAnyDone = state.tasks.some((task) => task.done);

      if (areAnyDone) {
        state.tasksHidden = !state.tasksHidden;
      }
    },

    completeAllTasks: (state) => {
      state.tasks.forEach((task) => {
        task.done = true;
      });
    },

    fetchExampleTasks: (state) => {
      state.fetchTasksStatus = "loading";
    },

    fetchExampleTasksSuccess: (state, action) => {
      state.tasks = action.payload;
      state.fetchTasksStatus = "success";
    },

    fetchExampleTasksError: (state) => {
      state.fetchTasksStatus = "error";
    },
  },
});

export const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;

export const selectTasksByQuery = createSelector(
  [selectTasks, (_, query) => query],
  (tasks, query) => {
    if (query && query.trim() !== "") {
      return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.toUpperCase())
      );
    }
    return tasks;
  }
);

export const selectTaskById = (state, taskId) => {
  if (selectTasks(state).some(({ id }) => id === taskId)) {
    return selectTasks(state).find(({ id }) => id === taskId);
  }
  return "";
};

export const selectTasksHidden = (state) => selectTasksState(state).tasksHidden;

export const selectFetchTasksStatus = (state) =>
  selectTasksState(state).fetchTasksStatus;

export const selectAreAllTasksDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export const {
  addNewTask,
  removeTask,
  toggleTaskDone,
  toggleHideDone,
  completeAllTasks,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} = tasksSlice.actions;

export default tasksSlice.reducer;
