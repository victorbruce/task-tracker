import { Dialog } from "@headlessui/react";
import { useState } from "react";
import styles from "./EditTaskModal.module.css"; // Import CSS Module
import { ITask, useTaskContext } from "../../context/TaskContext";

interface Props {
  isOpen: boolean;
  onClose: (arg: boolean) => void;
  task: ITask;
}

const EditTaskModal = ({ isOpen, onClose, task }: Props) => {
  const { updateTask } = useTaskContext();
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);
  const [description, setDescription] = useState(task.description || "");

  const handleSave = () => {
    const updatedTask = { ...task, title, priority, description };

    updateTask(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
    onClose(false);
  };

  return (
    <>
      <button className={styles.openBtn} onClick={() => onClose(false)}>
        Edit Task
      </button>

      <Dialog
        open={isOpen}
        onClose={() => onClose(false)}
        className={styles.modal}
      >
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <h2>Edit Task</h2>
            <div>
              <input
                className={styles.input}
                type="text"
                placeholder="Task Title"
                value={task.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <select
                className={styles.select}
                value={priority}
                onChange={(e) =>
                  setPriority(e.target.value as ITask["priority"])
                }
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <textarea
              className={styles.textarea}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button className={styles.closeBtn} onClick={handleSave}>
              Save Update
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default EditTaskModal;
