import { useLocation, useNavigate } from "react-router-dom";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);

  const replaceQueryParameter = ({ key, searchTerm }) => {
    if (!searchTerm) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, searchTerm);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  };

  return { replaceQueryParameter };
};
