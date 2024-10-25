import axios from "axios";

export const getExampleTasks = async () => {
  try {
    const response = await axios.get("https://sofyahreksoftware.github.io/react_to-do-list/exampleTasks.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching the example tasks", error);
  }
};
