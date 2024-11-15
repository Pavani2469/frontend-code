import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TaskForm.css'; // Import the CSS file

const TaskForm = ({ setRefresh, editTask, setEditTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [breakdownTasks, setBreakdownTasks] = useState([{ description: '', isComplete: false, gitHubLink: '' }]);

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setDueDate(editTask.dueDate);
      setBreakdownTasks(editTask.breakdownTasks);
    }
  }, [editTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editTask) {
        await axios.put(`http://localhost:3000/tasks/${editTask._id}`, { title, description, dueDate, breakdownTasks });
      } else {
        await axios.post('http://localhost:3000/tasks', { title, description, dueDate, breakdownTasks });
      }
      setRefresh((prev) => !prev);
      clearForm();
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
    setBreakdownTasks([{ description: '', isComplete: false, gitHubLink: '' }]);
    setEditTask(null);
  };

  const handleAddBreakdownTask = () => {
    setBreakdownTasks([...breakdownTasks, { description: '', isComplete: false, gitHubLink: '' }]);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form-container">
      <h2 className="task-form-title">{editTask ? 'Edit Task' : 'Create New Task'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="task-form-input"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="task-form-textarea"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="task-form-date"
      />
      <h3 className="task-form-breakdown-title">Breakdown Tasks</h3>
      {breakdownTasks.map((task, index) => (
        <div key={index} className="task-form-breakdown-item">
          <input
            type="text"
            placeholder="Breakdown Task Description"
            value={task.description}
            onChange={(e) => {
              const newTasks = [...breakdownTasks];
              newTasks[index].description = e.target.value;
              setBreakdownTasks(newTasks);
            }}
            className="task-form-breakdown-input"
          />
        </div>
      ))}
      <button type="button" onClick={handleAddBreakdownTask} className="task-form-add-button">
        Add Breakdown Task
      </button>
      <button type="submit" className="task-form-submit-button">
        {editTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
