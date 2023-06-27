import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "spędzic wieczór ze znajomymi", done: true },
  { id: 2, content: "stworzyć projekt w Reakcie", done: false },
  { id: 3, content: "zjeść kolację", done: true },
];
const tasksHidden = false;
const areAllTasksDone = tasks.every((task) => task.done);

function App() {
  return (
    <main>
      <Header headerName="Lista zadań" />

      <Section sectionBody={<Form />} sectionTitle="Dodaj nowe zadanie" />

      <Section
        headerAdditionalContent={
          <Buttons tasks={tasks} tasksHidden={tasksHidden}  areAllTasksDone={areAllTasksDone}/>
        }
        sectionTitle="Lista zadań"
        sectionBody={<Tasks tasks={tasks} tasksHidden={tasksHidden} />}
      />
    </main>
  );
}

export default App;
