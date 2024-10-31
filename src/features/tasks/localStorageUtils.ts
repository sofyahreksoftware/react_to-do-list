import { TaskProps } from "./types";

export const saveStateToLocalStorage = (keyName: string, value: boolean | TaskProps[]) => {
  try {
    localStorage.setItem(keyName, JSON.stringify(value));
  } catch (error) {
    console.error("Can not save to Local storage", error);
  }
};

export const getStateFromLocalStorage = (
  keyName: string,
  initialValue: boolean | TaskProps[]
) => {
  try {
    const item = localStorage.getItem(keyName);
    if (item === null) {
      return initialValue;
    }
    return JSON.parse(item);
  } catch (error) {
    console.error("Can not get initial state from Local storage", error);
    return initialValue;
  }
};
