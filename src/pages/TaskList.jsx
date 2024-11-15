// src/pages/TaskList.jsx
import React from 'react';
import axios from 'axios';
import './TaskList.css';

const TaskList = ({ tasks, setRefresh, setEditTask }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    setRefresh((prev) => !prev);
  };

  return (
    <div className={`task-list-container ${tasks.length === 0 ? 'no-tasks' : ''}`}>
      <h3 className="task-list-title">Task List</h3>
      {tasks.length === 0 ? (
        <p className="task-list-empty">No tasks available.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-list-item">
              <h4 className="task-title">{task.title}</h4>
              <p className="task-description">{task.description}</p>
              <button className="task-edit-button" onClick={() => setEditTask(task)}>Edit</button>
              <button className="task-delete-button" onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
