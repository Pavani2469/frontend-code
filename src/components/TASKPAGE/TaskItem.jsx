import React, { useState } from 'react';
import axios from 'axios';
import "./TaskItem.css"
const TaskItem = ({ task, setRefresh, setEditTask }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the modal visibility

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${task._id}`);
      setRefresh((prev) => !prev); // Trigger refresh
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen); // Toggle the modal visibility
  };

  return (
    <li>
      <h3 onClick={toggleModal} style={{ cursor: 'pointer' }}>{task.title}</h3> {/* Clickable title */}
      {isOpen && (
        <>
          <div className="modal-overlay" onClick={toggleModal}></div>
          <div className="modal">
            <h4>Task Details</h4>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Due Date:</strong> {task.dueDate}</p>
            <h4>Breakdown Tasks</h4>
            <ul>
              {task.breakdownTasks.map((bTask, index) => (
                <li key={index}>
                  {bTask.description} 
                  <input
                    type="checkbox"
                    checked={bTask.isComplete}
                    onChange={async () => {
                      const updatedTask = { ...task };
                      updatedTask.breakdownTasks[index].isComplete = !bTask.isComplete;
                      await axios.put(`http://localhost:3000/tasks/${task._id}`, updatedTask);
                      setRefresh((prev) => !prev); // Trigger refresh
                    }}
                  />
                </li>
              ))}
            </ul>
            <button onClick={() => setEditTask(task)}>Edit Task</button>
            <button onClick={handleDelete}>Delete Task</button>
            <button onClick={toggleModal}>Close</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;

