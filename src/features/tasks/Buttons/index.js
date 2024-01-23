import { StyledButtons, Button } from "./styled";

function Buttons({
  tasks,
  tasksHidden,
  toggleTaskHidden,
  completeAllTasks,
}) {
  const areAllTasksDone = tasks.every((task) => task.done);

  return (
    tasks.length > 0 && (
      <StyledButtons>
        <Button onClick={toggleTaskHidden}>
          {tasksHidden ? "Pokaż" : "Ukryj"}&nbsp;ukończone
        </Button>

        <Button onClick={completeAllTasks} disabled={areAllTasksDone}>
          Oznacz&nbsp;wszystkie
        </Button>
      </StyledButtons>
    )
  );
}

export default Buttons;
