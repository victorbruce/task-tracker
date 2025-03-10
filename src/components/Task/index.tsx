import style from "./Task.module.css";
import EditTaskModal from "../EditTaskModal";
import { ITask, useTaskContext } from "../../context/TaskContext";
import { useState } from "react";

const Task = ({ task }: { task: ITask }) => {
  const { deleteTask } = useTaskContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <li className={style.task} data-testid="task">
      <div className={style.taskHeader}>
        <h2 data-testid="task-title">{task.title}</h2>
        <span>{task.priority}</span>
      </div>
      <div className={style.taskBody}>
        <p>{task.description || ''}</p>
        <div className={style.actionBtns}>
          <button onClick={() => setIsModalOpen(true)} aria-label="Edit Task">
            edit
          </button>
          <button onClick={() => deleteTask(task.id)} aria-label="Delete Task">
            delete
          </button>
        </div>
      </div>
      {isModalOpen && (
        <EditTaskModal
          isOpen={isModalOpen}
          onClose={setIsModalOpen}
          task={task}
        />
      )}
    </li>
  );
};

export default Task;
