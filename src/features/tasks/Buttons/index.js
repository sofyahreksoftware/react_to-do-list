import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { StyledButtons, Button } from "./styled";
import { selectTasks, completeAllTasks, toggleHideDone } from "../tasksSlice";

function Buttons() {
  const dispatch = useDispatch();

  const { tasks, tasksHidden } = useSelector(selectTasks);

  const areAllTasksDone = tasks.every((task) => task.done);

  return (
    tasks.length > 0 && (
      <StyledButtons>
        <Button
          onClick={() => {
            dispatch(toggleHideDone());
          }}
        >
          {tasksHidden ? "Pokaż" : "Ukryj"}&nbsp;ukończone
        </Button>

        <Button
          onClick={() => {
            dispatch(completeAllTasks());
          }}
          disabled={areAllTasksDone}
        >
          Oznacz&nbsp;wszystkie
        </Button>
      </StyledButtons>
    )
  );
}

export default Buttons;
