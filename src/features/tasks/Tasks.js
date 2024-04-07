import Form from "./Form";
import TasksList from "./TasksList";
import MarkHideButtons from "./Buttons/MarkHideButtons";
import FetchTasksButton from "./Buttons/FetchTasksButton";
import SearchBar from "./SearchBar/SearchBar";
import { Section } from "../../common/Section";
import { StyledHeader } from "../../common/styledHeader";
import { StyledContainer } from "../../common/styledContainer";

function Tasks() {
  return (
    <StyledContainer>
      <StyledHeader>Lista zadań </StyledHeader>

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
    </StyledContainer>
  );
}

export default Tasks;
