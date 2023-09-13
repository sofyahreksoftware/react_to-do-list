import { useState, useEffect } from "react";

export const useLocalStorage = (keyName, initialValue) => {
  const getInitialState = () => {
    return JSON.parse(localStorage.getItem(keyName)) || initialValue;
  };

  const [state, setState] = useState(getInitialState);

  useEffect(
    () => localStorage.setItem(keyName, JSON.stringify(state)),
    [state]
  );

  return [state, setState];
};
