import { FormEvent, useRef, useState } from "react";
import { useTaskContext } from "../../context/TaskContext";
import style from "./TaskForm.module.css";
import { ITask } from "../../context/TaskContext";

const TaskForm = () => {
  const taskInputRef = useRef<HTMLInputElement>(null);
  const [priority, setPriority] = useState<ITask["priority"]>("Medium");
  const { addTask } = useTaskContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (taskInputRef.current) {
      console.log("task:", taskInputRef.current.value);
      addTask({
        id: Date.now(),
        title: taskInputRef.current.value,
        priority,
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
      <select
        id="priority"
        name="priority"
        className={style.select}
        value={priority}
        onChange={(e) => setPriority(e.target.value as ITask["priority"])}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button className={style.btn} type="submit" aria-label="Add Task">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
