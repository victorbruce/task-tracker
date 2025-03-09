import style from "./Task.module.css";
import { ITask, useTaskContext } from "../../context/TaskContext";

const Task = ({ task }: { task: ITask }) => {
  const { deleteTask } = useTaskContext();
  return (
    <li className={style.task} data-testid="task">
      <div className={style.taskHeader}>
        <h2 data-testid="task-title">{task.title}</h2>
        <span>{task.priority}</span>
      </div>
      <div className={style.taskBody}>
        <p>Description</p>
        <div className={style.actionBtns}>
          <button>edit</button>
          <button onClick={() => deleteTask(task.id)} aria-label="Delete Task">
            delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default Task;
