// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`deorbit-sidebar ${isOpen ? 'deorbit-open' : ''}`}>
      <div className="deorbit-sidebar-header">
        <button className="deorbit-close-icon" onClick={toggleSidebar}>✖</button>
      </div>
      <img src="/assets/profile.jpg" alt="Profile" className="deorbit-sidebar-profile" />
      <div className="deorbit-sidebar-icon" onClick={toggleSidebar}>🏠 Home</div>
      <div className="deorbit-sidebar-icon" onClick={toggleSidebar}>📋 Tasks</div>
      <div className="deorbit-sidebar-icon" onClick={toggleSidebar}>👥 Teams</div>
      <div className="deorbit-sidebar-icon" onClick={toggleSidebar}>📜 Certifications</div>
      <div className="deorbit-sidebar-icon" onClick={toggleSidebar}>📚 Courses</div>
      <div className="deorbit-sidebar-icon" onClick={toggleSidebar}>📅 Calendar</div>
      <div className="deorbit-sidebar-icon" onClick={toggleSidebar}>⚙️ Settings</div>
    </div>
  );
};

export default Sidebar;
