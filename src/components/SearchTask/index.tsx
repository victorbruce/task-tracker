import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

const SearchTask = ({ onSearch }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <label htmlFor="searchTask" className="srOnly">
        Search tasks:
      </label>
      <input
        id="searchTask"
        type="text"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={handleSearch}
        aria-label="Search tasks"
      />
    </div>
  );
};

export default SearchTask;
