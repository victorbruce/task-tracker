import { useTaskContext } from "../../context/TaskContext";
import style from "./Tasks.module.css";

// components
import Task from "../Task";

const Tasks = ({ searchQuery }: { searchQuery: string }) => {
  const { tasks, priorityFilter } = useTaskContext();

  const filteredTasks = tasks.filter((task) => {
    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;
      
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesPriority && matchesSearch;
  });

  if (!filteredTasks.length) {
    return (
      <div className={style.empty}>
        <p>No tasks available</p>
      </div>
    );
  }

  return (
    <div>
      <ul aria-label="tasks" className={style.tasks}>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
