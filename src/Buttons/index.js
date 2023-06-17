import "./style.css";

const Buttons = ({ tasks, tasksHidden, areAllTasksDone }) =>
  tasks.length > 0 && (
    <span className="buttons">
      <button className="buttons__button">
        {tasksHidden ? "Pokaż" : "Ukryj"} ukończone
      </button>

      <button
        className="buttons__button buttons__checkAllTasksDoneButton"
        disabled={areAllTasksDone}
      >
        Oznacz wszystkie
      </button>
    </span>
  );

export default Buttons;
