import './App.css';

function App() {
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
        <section id="home">
          <h2>Welcome to My Website</h2>
          <p>This is the main page of the website. Here you can find information about our services and company.</p>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>We are a company dedicated to providing excellent services to our customers.</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <p>We offer a wide range of services to meet your needs.</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us through our contact page.</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
