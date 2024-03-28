import { store } from "../store";
import {
  saveStateToLocalStorage,
} from "../localStorageUtils";

export const subscribeStore = () => {
  store.subscribe(() => {
    saveStateToLocalStorage("tasks", store.getState());
  });
};
