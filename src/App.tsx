import style from "./App.module.css";

// components
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import FilterTask from "./components/FilterTask";


export default function App() {
  return (
    <div className={style.app} data-testid="app">
      <FilterTask />
      <section aria-labelledby="tasks-heading">
        <h1 id="tasks-heading">Tasks:</h1>
        <Tasks />
      </section>
      <TaskForm />
    </div>
  );
}
