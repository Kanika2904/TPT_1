import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar'
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="main-content">
          <div className="user-list">
            <h3>Users</h3>
            <ul>
              <li>
                <span>John Doe</span>
                <button>View Profile</button>
              </li>
              <li>
                <span>Jane Smith</span>
                <button>View Profile</button>
              </li>
              <li>
                <span>Harry Styles</span>
                <button>View Profile</button>
              </li>
              <li>
                <span>Niall Horan</span>
                <button>View Profile</button>
              </li>
              <li>
                <span>Louis Tomlinson</span>
                <button>View Profile</button>
              </li>
              <li>
                <span>Zayn Malik</span>
                <button>View Profile</button>
              </li>
              <li>
                <span>Liam Payne</span>
                <button>View Profile</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
