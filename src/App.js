import { HashRouter, Route, Routes } from "react-router-dom";

import { Navigation } from "./common/Navigation";
import Tasks from "./features/tasks/Tasks";
import Task from "./features/tasks/Task";
import About from "./features/about/About";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/tasks/:taskId" element={<Task />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
