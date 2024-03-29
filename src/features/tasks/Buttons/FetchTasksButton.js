import { useDispatch, useSelector } from "react-redux";

import { fetchExampleTasks, selectFetchTasksStatus } from "../tasksSlice";
import { StyledButton } from "./styled";

function FetchTasksButton() {
  const dispatch = useDispatch();

  const fetchTasksStatus = useSelector(selectFetchTasksStatus);

  return (
    <>
      {(fetchTasksStatus === undefined || fetchTasksStatus === "success") && (
        <StyledButton
          onClick={() => {
            dispatch(fetchExampleTasks());
          }}
        >
          Pobierz przykładowe zadania
        </StyledButton>
      )}

      {fetchTasksStatus === "loading" && (
        <StyledButton disabled>Ładuję zadania...</StyledButton>
      )}

      {fetchTasksStatus === "error" && (
        <StyledButton $error>
          Ups... Wystąpił błąd przy pobieraniu zadań.
        </StyledButton>
      )}
    </>
  );
}

export default FetchTasksButton;
