import React, { useState } from "react";
import Login from "./Socialmedia/Login";
import Signup from "./Socialmedia/Signup";
import Dashboard from "./Socialmedia/Dashboard";
import "./Socialmedia/Social.css";

function App() {
  const [user, setUser] = useState(null);   // store logged-in user
  const [view, setView] = useState("login"); // login | signup | dashboard
  const [users, setUsers] = useState([]);   // store registered users

  const handleSignup = (newUser) => {
    setUsers([...users, newUser]);
    setView("login");
  };

  const handleLogin = (username, password) => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      setView("dashboard");
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setUser(null);
    setView("login");
  };

  return (
    <div>
      {view === "login" && (
        <Login onLogin={handleLogin} goToSignup={() => setView("signup")} />
      )}
      {view === "signup" && (
        <Signup onSignup={handleSignup} goToLogin={() => setView("login")} />
      )}
      {view === "dashboard" && <Dashboard user={user} onLogout={handleLogout} />}
    </div>
  );
}

export default App;
