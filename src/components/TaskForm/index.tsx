import { FormEvent, useRef } from "react";
import { useTaskContext } from "../../context/TaskContext";
import style from "./TaskForm.module.css";

const TaskForm = () => {
  const taskInputRef = useRef<HTMLInputElement>(null);
  const { addTask } = useTaskContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (taskInputRef.current) {
      console.log("task:", taskInputRef.current.value);
      addTask({
        id: Date.now(),
        title: taskInputRef.current.value,
        priority: "Medium",
      });
      taskInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="taskInput" className={style.srOnly}>
        Task:
      </label>
      <input
        ref={taskInputRef}
        id="taskInput"
        type="text"
        name="task"
        className={style.textInput}
        placeholder="Add a task"
        required
      />
      <button className={style.btn} type="submit" aria-label="Add Task">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
