import { useState } from "react";
import Tasks from "../Tasks";
import style from "./TaskContainer.module.css";
import { useTaskContext } from "../../context/TaskContext";

// components
import FilterTask from "../FilterTask";
import SearchTask from "../SearchTask";

const TasksContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { tasks } = useTaskContext();
  return (
    <div className={style.list}>
      <div className={style.searchAndFilter}>
        <FilterTask />
        <SearchTask onSearch={setSearchQuery} />
      </div>
      <div>{tasks?.length ? (<h1>Tasks ({tasks?.length})</h1>) : null}</div>
      <Tasks searchQuery={searchQuery} />
    </div>
  );
};

export default TasksContainer;
