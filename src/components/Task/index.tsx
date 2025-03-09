import style from "./Task.module.css";

const Task = () => {
  return (
    <div className={style.task}>
      <div className={style.taskHeader}>
        <h2 data-testid="task-title">Title</h2>
        <span>High</span>
      </div>
      <div className={style.taskBody}>
        <p>Description</p>
        <div className={style.actionBtns}>
          <button>edit</button>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
