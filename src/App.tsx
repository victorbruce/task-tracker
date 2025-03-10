import style from "./App.module.css";

// components
import TasksContainer from "./components/TasksContainer";
import TaskForm from "./components/TaskForm";

export default function App() {
  return (
    <div data-testid="app" className={style.app}>
      <TasksContainer />
      <TaskForm />
    </div>
  );
}
