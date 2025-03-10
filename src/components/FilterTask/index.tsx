import { useTaskContext } from "../../context/TaskContext";

const FilterTask = () => {
  const { priorityFilter, setPriorityFilter } = useTaskContext();

  return (
    <select
      value={priorityFilter}
      onChange={(e) => setPriorityFilter(e.target.value)}
    >
      <option value="All">All</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>
  );
};

export default FilterTask;
