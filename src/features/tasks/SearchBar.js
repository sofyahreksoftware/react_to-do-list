import { StyledForm, Input } from "./StyledFormComponents";

function SearchBar() {
  return (
    <StyledForm>
      <Input placeholder="Filtruj zadania" type="text" />
    </StyledForm>
  );
}

export default SearchBar;
