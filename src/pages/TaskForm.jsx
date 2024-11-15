// src/pages/TaskForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = ({ setRefresh, editTask, setEditTask }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    if (editTask) {
      setTask(editTask);
    }
  }, [editTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editTask) {
      // Update task
      await axios.put(`http://localhost:3000/tasks/${editTask.id}`, task);
    } else {
      // Create new task
      await axios.post('http://localhost:3000/tasks', task);
    }
    setRefresh((prev) => !prev);
    setTask({ title: '', description: '' });
    setEditTask(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editTask ? 'Edit Task' : 'Add Task'}</h3>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
        required
      />
      <button type="submit">{editTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
