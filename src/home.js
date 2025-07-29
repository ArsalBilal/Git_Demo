import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
      <header className="home-header">
        <h1>Welcome to Our Application</h1>
        <p>Your gateway to a seamless experience</p>
        <button className="cta-button" onClick={() => window.location.href='/signup'}>Get Started</button>
      </header>
      <section className="features-section">
        <h2>Features</h2>
        <ul className="features-list">
          <li>✅ User-friendly login and signup pages</li>
          <li>📱 Responsive design for all devices</li>
          <li>🔒 Fast and secure authentication</li>
          <li>🎨 Clean and modern UI</li>
        </ul>
      </section>
      <section className="testimonial-section">
        <h2>What Our Users Say</h2>
        <blockquote className="testimonial">
          "This app has transformed the way I manage my tasks. Highly recommended!"
          <footer>- Jane Doe</footer>
        </blockquote>
        <blockquote className="testimonial">
          "A seamless experience with excellent support. Five stars!"
          <footer>- John Smith</footer>
        </blockquote>
      </section>
      <section className="aboutus-section">
        <h2>About Us</h2>
        <p>
          We are committed to providing the best user experience with our cutting-edge web application.
          Our team works tirelessly to ensure security, performance, and usability.
        </p>
      </section>
      <footer className="home-footer">
        <div className="social-media-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">🔗</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Our Application. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
