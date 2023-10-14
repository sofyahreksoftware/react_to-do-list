import { List, Item, Button, Content } from "./styled";

const Tasks = ({ tasks, tasksHidden, toggleTaskDone, removeTask }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && tasksHidden}>
        <Button $green onClick={() => toggleTaskDone(task.id)}>
          {task.done ? (
            <i className="fa fa-check" aria-hidden="true"></i>
          ) : null}
        </Button>

        <Content $crossed={task.done}>{task.content}</Content>

        <Button $red onClick={() => removeTask(task.id)}>
          <i className="fa fa-trash"></i>
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
