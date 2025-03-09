import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Task {
  id: number;
  title: string;
  priority: "High" | "Medium" | "Low";
}

interface TaskContextType {
  tasks: Task[];
  priorityFilter: string;
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  setPriorityFilter: (filter: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [priorityFilter, setPriorityFilter] = useState<string>("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => setTasks([...tasks, task]);

  const deleteTask = (id: number) =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <TaskContext.Provider
      value={{ tasks, priorityFilter, addTask, deleteTask, setPriorityFilter }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context)
    throw new Error("useTaskContext must be used within TaskProvider");

  return context;
};
