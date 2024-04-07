import { HashRouter, Route, Routes } from "react-router-dom";

import Tasks from "./features/tasks/Tasks";
import Task from "./features/tasks/Task";
import About from "./features/about/About";
import { toAbout, toTask, toTasks } from "./routes";
import { Navigation } from "./common/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path={toTasks()} element={<Tasks />} />
        <Route path={toTask()} element={<Task />} />
        <Route path={toAbout()} element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
