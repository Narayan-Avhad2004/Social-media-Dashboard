import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const handleSignup = () => navigate("/signup");

  return (
    <div className="hero-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Connect. Share. Explore.</h1>
          <p>Join Sciobord today and start sharing your moments with the world!</p>
          <button className="btn-primary" onClick={handleSignup}>Sign Up</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1612831662091-8f31e0fa9a47?auto=format&fit=crop&w=800&q=80" alt="social media illustration" />
        </div>
      </section>

      <section className="features-section">
        <h2>Why Join Sciobord?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Connect Globally</h3>
            <p>Find friends and communities around the world and share your stories.</p>
          </div>
          <div className="feature">
            <h3>Share Moments</h3>
            <p>Post photos, videos, and updates instantly with your followers.</p>
          </div>
          <div className="feature">
            <h3>Discover Trends</h3>
            <p>Stay updated with trending content and explore new ideas daily.</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat"><h3>1M+</h3><p>Active Users</p></div>
        <div className="stat"><h3>500K+</h3><p>Posts Shared</p></div>
        <div className="stat"><h3>100+</h3><p>Countries</p></div>
      </section>
    </div>
  );
}

export default Hero;
