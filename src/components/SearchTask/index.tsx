import { useEffect, useState } from "react";
import style from './SearchTask.module.css';
interface Props {
  onSearch: (query: string) => void;
}

const SearchTask = ({ onSearch }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchQuery, onSearch]);

  return (
    <div>
      <label htmlFor="searchTask" className={style.srOnly}>
        Search tasks:
      </label>
      <input
        id="searchTask"
        type="text"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search tasks"
        className={style.textInput}
      />
    </div>
  );
};

export default SearchTask;
