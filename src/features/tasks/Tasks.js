import Form from "./Form";
import TasksList from "./TasksList";
import MarkHideButtons from "./Buttons/MarkHideButtons";
import FetchTasksButton from "./Buttons/FetchTasksButton";
import SearchBar from "./SearchBar";
import { Section } from "../../common/Section";
import { Header } from "../../common/Header";
import { Container } from "../../common/Container";

function Tasks() {
  return (
    <Container>
      <Header headerName="Lista zadań" />

      <Section
        headerAdditionalContent={<FetchTasksButton />}
        sectionTitle="Dodaj nowe zadanie"
        sectionBody={<Form />}
      />

      <Section sectionTitle="Wyszukiwarka" sectionBody={<SearchBar />} />

      <Section
        headerAdditionalContent={<MarkHideButtons />}
        sectionTitle="Lista zadań"
        sectionBody={<TasksList />}
      />
    </Container>
  );
}

export default Tasks;
