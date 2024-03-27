import { useSelector, useDispatch } from "react-redux";

import { useQueryParameter } from "../SearchBar/useQueryParameter";
import { searchQueryParamName } from "../SearchBar/searchQueryParamName";
import { List, Item, StyledLink, Button } from "./styled";
import {
  selectTasksByQuery,
  selectTasksHidden,
  toggleTaskDone,
  removeTask,
} from "../tasksSlice";

const TasksList = () => {
  const dispatch = useDispatch();
  const { query } = useQueryParameter(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));

  const tasksHidden = useSelector(selectTasksHidden);

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} $hidden={task.done && tasksHidden}>
          <Button
            $green
            onClick={() => {
              dispatch(toggleTaskDone(task.id));
            }}
          >
            {task.done ? (
              <i className="fa fa-check" aria-hidden="true"></i>
            ) : null}
          </Button>

          <StyledLink to={`/tasks/${task.id}`} $crossed={task.done}>
            {task.content}
          </StyledLink>

          <Button
            $red
            onClick={() => {
              dispatch(removeTask(task.id));
            }}
          >
            <i className="fa fa-trash"></i>
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
