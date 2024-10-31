export const toTasks = () => "/tasks";

export const toTask = ({ id } = { id: ":taskId" }) => `/tasks/${id}`;

export const toAbout = () => "/about";
