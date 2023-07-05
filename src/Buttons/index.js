import "./style.css";

const Buttons = ({ tasks, tasksHidden, areAllTasksDone, toggleTaskHidden }) =>
  tasks.length > 0 && (
    <div className="buttons">
      <button className="buttons__button" onClick={toggleTaskHidden}>
        {tasksHidden ? "Pokaż" : "Ukryj"} ukończone
      </button>

      <button
        className="buttons__button buttons__checkAllTasksDoneButton"
        disabled={areAllTasksDone}
      >
        Oznacz wszystkie
      </button>
    </div>
  );
export default Buttons;
