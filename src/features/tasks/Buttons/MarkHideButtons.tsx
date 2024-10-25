import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { TasksStateProps } from "../types";
import { StyledButton, StyledButtons } from "./styled";
import {
  selectTasks,
  selectTasksHidden,
  selectAreAllTasksDone,
  completeAllTasks,
  toggleHideDone,
} from "../tasksSlice";

function MarkHideButtons() {
  const dispatch = useDispatch();

  const tasks = useSelector((state: { tasks: TasksStateProps }) =>
    selectTasks(state)
  );
  const tasksHidden = useSelector(selectTasksHidden);
  const areAllTasksDone = useSelector(selectAreAllTasksDone);

  return (
    tasks.length > 0 && (
      <StyledButtons>
        <StyledButton
          onClick={() => {
            dispatch(toggleHideDone());
          }}
        >
          {tasksHidden ? "Pokaż" : "Ukryj"}&nbsp;ukończone
        </StyledButton>

        <StyledButton
          onClick={() => {
            dispatch(completeAllTasks());
          }}
          disabled={areAllTasksDone}
        >
          Oznacz&nbsp;wszystkie
        </StyledButton>
      </StyledButtons>
    )
  );
}

export default MarkHideButtons;
