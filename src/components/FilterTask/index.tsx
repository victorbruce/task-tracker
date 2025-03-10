import { useTaskContext } from "../../context/TaskContext";
import style from "./FilterTask.module.css";

const FilterTask = () => {
  const { priorityFilter, setPriorityFilter } = useTaskContext();

  return (
    <div className={style.selectContainer}>
      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
        className={style.select}
      >
        <option value="All">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <div className={style.arrow}></div>
    </div>
  );
};

export default FilterTask;
