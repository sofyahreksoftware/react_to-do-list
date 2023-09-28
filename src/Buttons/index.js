import { StyledButtons, Button } from "./styled";

const Buttons = ({
  tasks,
  tasksHidden,
  areAllTasksDone,
  toggleTaskHidden,
  completeAllTasks,
}) =>
  tasks.length > 0 && (
    <StyledButtons>
      <Button onClick={toggleTaskHidden}>
        {tasksHidden ? "Pokaż" : "Ukryj"}&nbsp;ukończone
      </Button>

      <Button onClick={completeAllTasks} disabled={areAllTasksDone}>
        Oznacz&nbsp;wszystkie
      </Button>
    </StyledButtons>
  );

export default Buttons;
