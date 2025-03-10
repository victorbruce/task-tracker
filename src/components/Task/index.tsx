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
        <span className={task.priority}>{task.priority}</span>
      </div>
      <div className={style.taskBody}>
        <p>{task.description || ""}</p>
        <div className={style.actionBtns}>
          <button
            className={style.edit}
            onClick={() => setIsModalOpen(true)}
            aria-label="Edit Task"
          >
            <EditIcon />
          </button>
          <button
            className={style.delete}
            onClick={() => deleteTask(task.id)}
            aria-label="Delete Task"
          >
            <DeleteIcon />
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

const DeleteIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.16602 6.5415H5.16602H21.166"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.166 6.5415V20.5415C19.166 21.0719 18.9553 21.5806 18.5802 21.9557C18.2052 22.3308 17.6964 22.5415 17.166 22.5415H7.16602C6.63558 22.5415 6.12687 22.3308 5.7518 21.9557C5.37673 21.5806 5.16602 21.0719 5.16602 20.5415V6.5415M8.16602 6.5415V4.5415C8.16602 4.01107 8.37673 3.50236 8.7518 3.12729C9.12688 2.75222 9.63558 2.5415 10.166 2.5415H14.166C14.6964 2.5415 15.2052 2.75222 15.5802 3.12729C15.9553 3.50236 16.166 4.01107 16.166 4.5415V6.5415"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.166 11.5415V17.5415"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.166 11.5415V17.5415"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const EditIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8071 4.25586H4.80713C4.2767 4.25586 3.76799 4.46657 3.39292 4.84165C3.01784 5.21672 2.80713 5.72543 2.80713 6.25586V20.2559C2.80713 20.7863 3.01784 21.295 3.39292 21.6701C3.76799 22.0451 4.2767 22.2559 4.80713 22.2559H18.8071C19.3376 22.2559 19.8463 22.0451 20.2213 21.6701C20.5964 21.295 20.8071 20.7863 20.8071 20.2559V13.2559"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3071 2.75584C19.705 2.35802 20.2445 2.13452 20.8071 2.13452C21.3697 2.13452 21.9093 2.35802 22.3071 2.75584C22.705 3.15367 22.9284 3.69323 22.9284 4.25584C22.9284 4.81845 22.705 5.35802 22.3071 5.75584L12.8071 15.2558L8.80713 16.2558L9.80713 12.2558L19.3071 2.75584Z"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
