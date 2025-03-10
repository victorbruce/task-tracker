import { useState } from "react";
import { useTaskContext } from "../../context/TaskContext";
import style from "./Tasks.module.css";

// components
import Task from "../Task";
import SearchTask from "../SearchTask";

const Tasks = () => {
  const { tasks, priorityFilter } = useTaskContext();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = tasks.filter(
    (task) =>
      ((priorityFilter === "All" || task.priority === priorityFilter) &&
        task.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      task.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!filteredTasks.length) {
    return <p>No tasks available</p>;
  }

  return (
    <div>
      <SearchTask onSearch={setSearchQuery} />
      <ul aria-label="tasks" className={style.tasks}>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
