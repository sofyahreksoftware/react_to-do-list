import "./style.css";

const Buttons = ({
  tasks,
  tasksHidden,
  areAllTasksDone,
  toggleTaskHidden,
  completeAllTasks,
}) =>
  tasks.length > 0 && (
    <div className="buttons">
      <button className="buttons__button" onClick={toggleTaskHidden}>
        {tasksHidden ? "Pokaż" : "Ukryj"}&nbsp;ukończone
      </button>

      <button
        className="buttons__button buttons_checkAllTasksDoneButton"
        onClick={completeAllTasks}
        disabled={areAllTasksDone}
      >
        Oznacz&nbsp;wszystkie
      </button>
    </div>
  );
  
export default Buttons;
