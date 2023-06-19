import "./style.css";

const Tasks = ({ tasks, tasksHidden }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`tasks__item ${
          task.done && tasksHidden ? "tasks__item--hidden" : ""
        }`}
      >
        <button className="tasks__button tasks__button--green tasks__itemElement">
          {task.done ? (
            <i className="fa fa-check" aria-hidden="true"></i>
          ) : null}
        </button>
        <span
          className={`tasks__taskContent ${
            task.done && "tasks__taskContent--crossed"
          }`}
        >
          {task.content}
        </span>
        <button className="tasks__button tasks__buttonRemove tasks__itemElement">
          <i className="fa fa-trash"></i>
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
