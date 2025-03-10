import { Dialog } from "@headlessui/react";
import { useState } from "react";
import styles from "./EditTaskModal.module.css";
import { ITask, useTaskContext } from "../../context/TaskContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  task: ITask;
}

const EditTaskModal = ({ isOpen, onClose, task }: Props) => {
  const { updateTask } = useTaskContext();
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);
  const [description, setDescription] = useState(task.description || "");

  const handleSave = () => {
    if (!title.trim()) return;

    const updatedTask = { ...task, title, priority, description };
    updateTask(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className={styles.modalBackdrop}>
      <Dialog.Panel className={styles.modalContent}>
        <button className={styles.closeIcon} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.modalTitle}>Edit Task</h2>
        <input
          className={styles.input}
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={styles.selectContainer}>
          <select
            className={styles.select}
            value={priority}
            onChange={(e) => setPriority(e.target.value as ITask["priority"])}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <div className={styles.arrow}></div>
        </div>
        <textarea
          className={styles.textarea}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className={styles.saveBtn} onClick={handleSave}>
          Save Update
        </button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default EditTaskModal;
