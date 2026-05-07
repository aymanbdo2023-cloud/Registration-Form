import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Build Something Great</h1>
        <p>A simple and clean starting point for your next project.</p>
        <div className="landing-actions">
          <Link to="/about" className="btn-primary">Get Started</Link>
          <Link to="/contact" className="btn-secondary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;