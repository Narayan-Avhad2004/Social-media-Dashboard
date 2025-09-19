import React from "react";
import Header from "./Header";
import Card from "./Card";
import data from "./Data";

function Dashboard({ user, onLogout }) {
  return (
    <div>
      <Header />
      <div style={{ textAlign: "right", padding: "10px 20px" }}>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </div>
      <h2 style={{ textAlign: "center" }}>Welcome, {user.username} 🎉</h2>
      <div className="dashboard">
        {data.map((post, index) => (
          <Card key={index} user={post} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
