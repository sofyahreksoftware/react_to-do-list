import { useTasks } from "./useTasks";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";

function Tasks() {
  const { toggleHideDone, tasksHidden } = useTasks();
  
  return (
    <main>
      <Header headerName="Lista zadań" />

      <Section sectionBody={<Form />} sectionTitle="Dodaj nowe zadanie" />

      <Section
        headerAdditionalContent={
          <Buttons
            tasksHidden={tasksHidden}
            toggleHideDone={toggleHideDone}
          />
        }
        sectionTitle="Lista zadań"
        sectionBody={<TasksList tasksHidden={tasksHidden} />}
      />
    </main>
  );
}

export default Tasks;
