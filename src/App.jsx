// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import TaskForm from './pages/TaskForm';
import TaskList from './pages/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [refresh]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar

  return (
    <Router>
      <div className={`container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> {/* Toggle passed to Sidebar */}
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <TaskList
                    tasks={tasks}
                    setRefresh={setRefresh}
                    setEditTask={setEditTask}
                  />
                }
              />
              <Route
                path="/tasks/add"
                element={
                  <TaskForm
                    setRefresh={setRefresh}
                    editTask={editTask}
                    setEditTask={setEditTask}
                  />
                }
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
