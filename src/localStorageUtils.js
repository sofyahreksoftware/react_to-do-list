export const saveStateToLocalStorage = (keyName, value) => {
  try {
    localStorage.setItem(keyName, JSON.stringify(value));
  } catch (error) {
    console.error("Can not save to Local storage", error);
  }
};

export const getStateFromLocalStorage = (keyName) => {
  try {
    const initialState = JSON.parse(localStorage.getItem(keyName)) || undefined;
    return initialState;
  } catch (error) {
    console.error("Can not get initial state from Local storage", error);
  }
};
