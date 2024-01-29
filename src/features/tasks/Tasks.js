import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";

function Tasks() {
  return (
    <main>
      <Header headerName="Lista zadań" />

      <Section sectionBody={<Form />} sectionTitle="Dodaj nowe zadanie" />

      <Section
        headerAdditionalContent={<Buttons />}
        sectionTitle="Lista zadań"
        sectionBody={<TasksList />}
      />
    </main>
  );
}

export default Tasks;
