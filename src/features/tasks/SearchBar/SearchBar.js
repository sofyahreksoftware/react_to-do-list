import { StyledForm, Input } from "../styledFormComponents";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";
import { searchQueryParamName } from "./searchQueryParamName";
import { useQueryParameter } from "./useQueryParameter";

function SearchBar() {
  const { query } = useQueryParameter(searchQueryParamName);
  const { replaceQueryParameter } = useReplaceQueryParameter();

  const onInputChange = (value) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      searchTerm: value.trim(),
    });
  };

  return (
    <StyledForm>
      <Input
        placeholder="Filtruj zadania"
        type="text"
        value={query || ""}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </StyledForm>
  );
}

export default SearchBar;
