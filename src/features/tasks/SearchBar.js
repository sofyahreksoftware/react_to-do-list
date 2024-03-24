import { useLocation, useNavigate } from "react-router-dom";

import { StyledForm, Input } from "./StyledFormComponents";

function SearchBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search");

  const updateSearchParams = (searchTerm ) => {
    if (searchTerm ) {
      searchParams.set("search", searchTerm );
    } else {
      searchParams.delete("search");
    }

    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  };

  return (
    <StyledForm>
      <Input
        placeholder="Filtruj zadania"
        type="text"
        value={query || ""}
        onChange={(event) => {
          updateSearchParams(event.target.value);
        }}
      />
    </StyledForm>
  );
}

export default SearchBar;
