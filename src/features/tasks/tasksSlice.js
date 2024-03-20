import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [], tasksHidden: false, fetchTasksStatus: "" },
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

export const selectTasks = (state) => state.tasks;

export const selectTaskById = (state, taskId) => {
  if (state.tasks.tasks.some((task) => task.id === taskId)) {
    return state.tasks.tasks.find((task) => task.id === taskId);
  }
  return "";
};

export const selectTasksHidden = (state) => state.tasks.tasksHidden;

export const selectFetchTasksStatus = (state) => state.tasks.fetchTasksStatus;

export const selectAreAllTasksDone = (state) =>
  state.tasks.tasks.every((task) => task.done);

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
