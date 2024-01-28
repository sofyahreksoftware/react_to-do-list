import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [], tasksHidden: false },
  reducers: {
    addNewTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    removeTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
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
  },
});

export const selectTasks = (state) => state.tasks;

// export const selectTasksHidden = (state) => state.tasks.tasksHidden;

export const {
  addNewTask,
  removeTask,
  toggleTaskDone,
  toggleHideDone,
  completeAllTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
