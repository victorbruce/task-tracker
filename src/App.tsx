import style from "./App.module.css";

// components
import TaskForm from "./components/TaskForm";

export default function App() {
  return (
    <div className={style.app}>
      <TaskForm />
    </div>
  );
}
