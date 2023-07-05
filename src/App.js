import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import React, { useState } from "react";

const tasks = [
  { id: 1, content: "spędzic wieczór ze znajomymi", done: true },
  { id: 2, content: "stworzyć projekt w Reakcie", done: false },
  { id: 3, content: "zjeść kolację", done: true },
];
const areAllTasksDone = tasks.every((task) => task.done);
const areAnyDone = tasks.some((task) => task.done);

function App() {
  const [tasksHidden, setTasksHidden] = useState(false);
  const toggleTaskHidden = () => {
    setTasksHidden(areAnyDone ? (tasksHidden) => !tasksHidden : null);
  };

  return (
    <main>
      <Header headerName="Lista zadań" />

      <Section sectionBody={<Form />} sectionTitle="Dodaj nowe zadanie" />

      <Section
        headerAdditionalContent={
          <Buttons
            toggleTaskHidden={toggleTaskHidden}
            tasks={tasks}
            tasksHidden={tasksHidden}
            areAllTasksDone={areAllTasksDone}
          />
        }
        sectionTitle="Lista zadań"
        sectionBody={<Tasks tasks={tasks} tasksHidden={tasksHidden} />}
      />
    </main>
  );
}

export default App;
