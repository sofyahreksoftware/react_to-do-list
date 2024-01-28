import { useSelector, useDispatch } from "react-redux";

import { List, Item, Button, Content } from "./styled";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

const TasksList = () => {
  const dispatch = useDispatch();

  const { tasks, tasksHidden } = useSelector(selectTasks);

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

          <Content $crossed={task.done}>{task.content}</Content>

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
