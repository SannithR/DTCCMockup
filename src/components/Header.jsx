import React from 'react';
import './Heder.css';

export default function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo-title">
          <img src="/dtcc-logo.svg" alt="DTCC Logo" className="logo-image" />
          <span className="title">FINANCIAL SERVICES PLATFORM</span>
        </div>
        <div className="icons">
          <i className="icon search" title="Search" />
          <i className="icon help" title="Help" />
          <i className="icon settings" title="Settings" />
          <i className="icon user" title="Profile" />
          <i className="icon logout" title="Logout" />
        </div>
      </div>
      <div className="nav-bar">
        <nav className="nav-links">
          <a href="#" className="active">Navigation One</a>
          <a href="#">Navigation Two</a>
          <a href="#">Navigation Three</a>
        </nav>
        <div className="switcher">
          <label>Switcher</label>
          <select>
            <option>ABC123 - TEST MOCK UP IN DEVX</option>
          </select>
        </div>
      </div>
    </header>
  );
}
