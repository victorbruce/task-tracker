import style from "./App.module.css";

// components
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";


export default function App() {
  return (
    <div className={style.app}>
      <section aria-labelledby="tasks-heading">
        <h1 id="tasks-heading">Tasks:</h1>
        <Tasks />
      </section>
      <TaskForm />
    </div>
  );
}
