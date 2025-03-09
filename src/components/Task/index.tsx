import style from "./Task.module.css";

export interface TaskProp {
  id: number;
  title: string;
  priority: "High" | "Medium" | "Low";
}

const Task = ({ task }: { task: TaskProp }) => {
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
          <button>delete</button>
        </div>
      </div>
    </li>
  );
};

export default Task;
