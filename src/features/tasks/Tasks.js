import { useTasks } from "./useTasks";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";

function Tasks() {
  const {
    tasks,
    tasksHidden,
    toggleTaskHidden,
    completeAllTasks,
    toggleTaskDone,
    removeTask,
    addNewTask,
  } = useTasks();

  return (
    <main>
      <Header headerName="Lista zadań" />

      <Section
        sectionBody={<Form addNewTask={addNewTask} />}
        sectionTitle="Dodaj nowe zadanie"
      />

      <Section
        headerAdditionalContent={
          <Buttons
            toggleTaskHidden={toggleTaskHidden}
            tasks={tasks}
            tasksHidden={tasksHidden}
            completeAllTasks={completeAllTasks}
          />
        }
        sectionTitle="Lista zadań"
        sectionBody={
          <TasksList
            tasks={tasks}
            tasksHidden={tasksHidden}
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
          />
        }
      />
    </main>
  );
}

export default Tasks;
