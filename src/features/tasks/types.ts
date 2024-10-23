export interface TaskProps {
  id: string;
  content: string;
  done: boolean;
}

export interface TasksStateProps {
  tasks: TaskProps[];
  tasksHidden: boolean;
  fetchTasksStatus: undefined | "loading" | "success" | "error";
}