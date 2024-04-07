export const toTasks = () => "/";

export const toTask = ({ taskId } = { taskId: ":taskId" }) =>
  `/tasks/${taskId}`;

export const toAbout = () => "/about";
