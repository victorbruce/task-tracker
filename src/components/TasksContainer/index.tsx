import Tasks from "../Tasks";
import style from "./TaskContainer.module.css";

const TasksContainer = () => {
  return (
    <div className={style.list}>
      <Tasks />
    </div>
  );
};

export default TasksContainer;
