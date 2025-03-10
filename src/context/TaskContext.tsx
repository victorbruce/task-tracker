import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface ITask {
  id: number;
  title: string;
  description?: string;
  priority: "High" | "Medium" | "Low";
}

interface TaskContextType {
  tasks: ITask[];
  priorityFilter: string;
  addTask: (task: ITask) => void;
  deleteTask: (id: number) => void;
  updateTask: (task: ITask) => void;
  setPriorityFilter: (filter: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [priorityFilter, setPriorityFilter] = useState<string>("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: ITask) => setTasks([...tasks, task]);

  const deleteTask = (id: number) =>
    setTasks(tasks.filter((task) => task.id !== id));

  const updateTask = (updatedTask: ITask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, priorityFilter, addTask, deleteTask, updateTask, setPriorityFilter }}
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
