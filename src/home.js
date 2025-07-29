import React from 'react';

function Home() {
  return (
    <div className="home-container" style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Welcome to Our Application</h1>
        <p>Your gateway to a seamless experience</p>
      </header>
      <section style={{ marginBottom: '2rem' }}>
        <h2>Features</h2>
        <ul>
          <li>User-friendly login and signup pages</li>
          <li>Responsive design for all devices</li>
          <li>Fast and secure authentication</li>
          <li>Clean and modern UI</li>
        </ul>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2>About Us</h2>
        <p>
          We are committed to providing the best user experience with our cutting-edge web application.
          Our team works tirelessly to ensure security, performance, and usability.
        </p>
      </section>
      <footer style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
        &copy; {new Date().getFullYear()} Our Application. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
