import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          alt="logo"
          className="logo"
        />
        <h1>Social Media Dashboard</h1>
      </div>
      <input type="text" placeholder="Search..." />
    </header>
  );
}

export default Header;
