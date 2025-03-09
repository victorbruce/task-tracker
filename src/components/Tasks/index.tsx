import Task, { TaskProp } from "../Task";
import style from "./Tasks.module.css";

const Tasks = ({ tasks }: { tasks: TaskProp[] }) => {
  if (!tasks.length) {
    return <p>No tasks available</p>;
  }

  return (
    <ul aria-label="tasks" className={style.tasks}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default Tasks;
