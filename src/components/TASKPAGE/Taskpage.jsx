// src/components/TaskPage.jsx
import React, { useState } from 'react';
import './TaskPage.css';

const TaskPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [tasks, setTasks] = useState([]); // Array for holding tasks

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="taskpage-container">
      

      {/* Main Content */}
      <main className="taskpage-content">
        {tasks.length === 0 ? (
          <div className="taskpage-empty-card">
            <p>No tasks available. Add a task to get started!</p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <div key={index} className="taskpage-task-card">
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default TaskPage;
