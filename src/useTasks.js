import { useLocalStorage } from "./useLocaleStorage";

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [tasksHidden, setTasksHidden] = useLocalStorage("tasksHidden", false);
  const areAnyDone = tasks.some((task) => task.done);

  const toggleTaskHidden = () => {
    setTasksHidden(areAnyDone ? !tasksHidden : null);
  };

  const completeAllTasks = () =>
    setTasks(tasks.map((task) => ({ ...task, done: true })));

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const addNewTask = (newTaskContent) => {
    setTasks((tasks) => [
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 0,
        content: newTaskContent,
        done: false,
      },
    ]);
  };

  return {
    tasks,
    tasksHidden,
    toggleTaskHidden,
    completeAllTasks,
    toggleTaskDone,
    removeTask,
    addNewTask,
  };
};
