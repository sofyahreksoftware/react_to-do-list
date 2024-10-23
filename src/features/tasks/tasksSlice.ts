import { createSlice, createSelector } from "@reduxjs/toolkit";

import { getStateFromLocalStorage } from "./localStorageUtils";
import { TaskProps, TasksStateProps } from "./types";

const initialState: TasksStateProps = {
  tasks: getStateFromLocalStorage("tasks", []),
  tasksHidden: getStateFromLocalStorage("tasksHidden", false),
  fetchTasksStatus: undefined,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    removeTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task: TaskProps) => task.id === action.payload
      );
      state.tasks.splice(index, 1);
    },

    toggleTaskDone: (state, action) => {
      const task = state.tasks.find(
        (task: TaskProps) => task.id === action.payload
      );

      if (task) {
        task.done = !task.done;
      }
    },

    toggleHideDone: (state) => {
      const areAnyDone = state.tasks.some((task: TaskProps) => task.done);

      if (areAnyDone) {
        state.tasksHidden = !state.tasksHidden;
      }
    },

    completeAllTasks: (state) => {
      state.tasks.forEach((task: TaskProps) => {
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

export const selectTasksState = (state: { tasks: TasksStateProps }) =>
  state.tasks;

export const selectTasks = (state: { tasks: TasksStateProps }) =>
  selectTasksState(state).tasks;

export const selectTasksByQuery = createSelector(
  [selectTasks, (_, query) => query],
  (tasks: TaskProps[], query: string) => {
    if (query && query.trim() !== "") {
      return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.toUpperCase())
      );
    }
    return tasks;
  }
);

export const selectTaskById = (
  state: { tasks: TasksStateProps },
  taskId: string
): TaskProps | null => {
  const task = selectTasks(state).find(({ id }: TaskProps) => id === taskId);
  return task || null;
};

export const selectTasksHidden = (state: { tasks: TasksStateProps }) =>
  selectTasksState(state).tasksHidden;

export const selectFetchTasksStatus = (state: { tasks: TasksStateProps }) =>
  selectTasksState(state).fetchTasksStatus;

export const selectAreAllTasksDone = (state: { tasks: TasksStateProps }) =>
  selectTasks(state).every(({ done }: TaskProps) => done);

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
