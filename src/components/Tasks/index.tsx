import Task from "../Task";
import { useTaskContext } from "../../context/TaskContext";
import style from "./Tasks.module.css";

const Tasks = () => {
  const { tasks, priorityFilter } = useTaskContext();

  const filteredTasks = tasks.filter(
    (task) => priorityFilter === "All" || task.priority === priorityFilter
  );

  if (!filteredTasks.length) {
    return <p>No tasks available</p>;
  }

  return (
    <ul aria-label="tasks" className={style.tasks}>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default Tasks;
