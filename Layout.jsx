import React from 'react';
import Sidebar from './Sidebar';
import './Layout.css'; // Optional: Add layout-specific styles

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;