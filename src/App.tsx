import { useState } from "react";
import style from "./App.module.css";

// components
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import { TaskProp } from "./components/Task";


export default function App() {
  const [tasks, setTasks] = useState<TaskProp[]>([
    { id: 1, title: "Learn React", priority: "High" },
    { id: 2, title: "Build a project", priority: "Medium" },
  ]);

  return (
    <div className={style.app}>
      <section aria-labelledby="tasks-heading">
        <h1 id="tasks-heading">Tasks:</h1>
        <Tasks tasks={tasks} />
      </section>
      <TaskForm />
    </div>
  );
}
