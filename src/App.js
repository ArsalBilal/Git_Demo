import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration, just show a success message
    setFormStatus('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Website</h1>
        <nav className="App-nav">
          <ul>
            <li><a href="#home" className="App-link">Home</a></li>
            <li><a href="#about" className="App-link">About</a></li>
            <li><a href="#services" className="App-link">Services</a></li>
            <li><a href="#contact" className="App-link">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <section id="home" className="hero-section">
          <h2>Welcome to My Website</h2>
          <p>This is the main page of the website. Here you can find information about our services and company.</p>
          <button className="cta-button" onClick={() => alert('Call to action clicked!')}>Get Started</button>
        </section>
        <section id="about" className="section-with-icon">
          <h2>About Us</h2>
          <p>We are a company dedicated to providing excellent services to our customers.</p>
        </section>
        <section id="services" className="section-with-icon">
          <h2>Our Services</h2>
          <p>We offer a wide range of services to meet your needs.</p>
        </section>
        <section id="contact" className="section-with-icon">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us through our contact page.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required />
            <button type="submit" className="submit-button">Send</button>
          </form>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </section>
      </main>
      <footer className="App-footer">
        <div className="footer-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a> | 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a> | 
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a> | 
          <a href="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</a>
        </div>
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
