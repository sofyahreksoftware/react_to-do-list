import { useTasks } from "./useTasks";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

function App() {
  const {
    tasks,
    tasksHidden,
    toggleTaskHidden,
    completeAllTasks,
    toggleTaskDone,
    removeTask,
    addNewTask,
  } = useTasks();

  const areAllTasksDone = tasks.every((task) => task.done);

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
            areAllTasksDone={areAllTasksDone}
            completeAllTasks={completeAllTasks}
          />
        }
        sectionTitle="Lista zadań"
        sectionBody={
          <Tasks
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

export default App;
