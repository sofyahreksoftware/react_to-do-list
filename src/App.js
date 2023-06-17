import Form from "./Form";
// import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  { id: 1, content: "spędzic wieczór ze znajomymi", done: false },
  { id: 2, content: "stworzyć projekt w Reakcie", done: false },
  { id: 3, content: "zjeść kolację", done: true },
];
const tasksHidden = false;
const areAllTasksDone = tasks.every((task) => task.done);

function App() {
  return (
    <main>
      <h1 className="header">Lista zadań</h1>
      <section className="section">
        <h2 className="section__title">Dodaj nowe zadanie</h2>
        <Form />
      </section>

      <section className="section">
        <div className="section__header section__header--withButtons">
          <h2 className="section__title section__title--withoutBorder">
            Lista zadań
          </h2>
          <Buttons
            tasks={tasks}
            tasksHidden={tasksHidden}
            areAllTasksDone={areAllTasksDone}
          />
        </div>

        {/* <Tasks
            tasks={tasks}
            tasksHidden={tasksHidden}
            areAllTasksDone={areAllTasksDone}
          /> */}
      </section>
    </main>
  );
}

export default App;
