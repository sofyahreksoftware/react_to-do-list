import Form from "./Form";
import Tasks from "./Tasks";

const tasks = [
  { id: 1, content: "spędzic wieczór ze znajomymi", done: false },
  { id: 2, content: "stworzyć projekt w Reakcie", done: false },
  { id: 3, content: "zjeść kolację", done: true },
];
const tasksHidden = false;

function App() {
  return (
    <div className="App">
      <h1 className="header">Lista zadań</h1>
      <main>
        <section className="section">
          <h2 className="section__title">Dodaj nowe zadanie</h2>
          <Form />
        </section>

        <section className="section">
          <div className="section__header section__header--withButtons">
            <h2 className="section__title section__title--withoutBorder">
              Lista zadań
            </h2>
            <Buttons tasks={tasks} tasksHidden={tasksHidden} areAllTasksDone={areAllTasksDone} />
          </div>

          {/* <Tasks
            tasks={tasks}
            tasksHidden={tasksHidden}
            areAllTasksDone={areAllTasksDone}
          /> */}
          <Form/>
        </section>

        <section className="section">
          <div className="section__header">
            <h2 className="section__title section__title--withoutBorder">
              Lista zadań
            </h2>
            <span className="section__buttons"></span>
          </div>

          <Tasks tasks={tasks} tasksHidden={tasksHidden} />
        </section>
      </main>
    </div>
  );
}

export default App;
