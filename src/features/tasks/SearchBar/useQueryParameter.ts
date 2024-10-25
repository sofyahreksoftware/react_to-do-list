import { useLocation } from "react-router-dom";

export const useQueryParameter = (searchQueryParamName: string) => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamName);

  return { query };
};
