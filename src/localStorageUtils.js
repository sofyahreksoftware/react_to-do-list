export const saveStateToLocalStorage = (keyName, value) => {
  try {
    localStorage.setItem(keyName, JSON.stringify(value));
  } catch (error) {
    console.error("Can not save to Local storage", error);
  }
};

export const getStateFromLocalStorage = (keyName, initialValue) => {
  try {
    const initialState = JSON.parse(localStorage.getItem(keyName)) || initialValue;
    return initialState;
  } catch (error) {
    console.error("Can not get initial state from Local storage", error);
  }
};
