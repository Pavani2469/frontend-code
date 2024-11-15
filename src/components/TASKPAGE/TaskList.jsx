// src/components/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, setRefresh, setEditTask }) => {
  return (
    <div className="tasklist-container">
      <h2 className="tasklist-title">Task List</h2>
      <ul className="tasklist-items">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              setRefresh={setRefresh}
              setEditTask={setEditTask}
            />
          ))
        ) : (
          <li className="tasklist-no-tasks">No tasks available</li>
        )}
      </ul>
      {/* Sample Task Cards */}
      <div className="tasklist-card-container">
        <div className="tasklist-card">
          <div className="tasklist-card-header">JavaScript Mini-Task</div>
          <p>9 Students</p>
          <p>Due Today - Assignment</p>
          <div className="tasklist-card-footer">
            <i>📊</i>
            <i>📁</i>
          </div>
        </div>

        <div className="tasklist-card">
          <div className="tasklist-card-header">Web App Challenge</div>
          <p>9 Students</p>
          <p>Due Today - Assignment</p>
          <div className="tasklist-card-footer">
            <i>📊</i>
            <i>📁</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
