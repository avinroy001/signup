import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import img from './assets/img.png';
import { FaCheckCircle } from 'react-icons/fa'; // ✅ Added React Icon

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Valid email required.');
    } else {
      setError('');
      localStorage.setItem('subscriberEmail', email);
      navigate('/success', { state: { email } });
    }
  };

  return (
    <div className="main">
      <div className="card-container">
        <div className="content-container">
          {/* Left (form) */}
          <div className="form-wrapper">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li><FaCheckCircle className="tick-icon" /> Product discovery and building what matters</li>
              <li><FaCheckCircle className="tick-icon" /> Measuring to ensure updates are a success</li>
              <li><FaCheckCircle className="tick-icon" /> And much more!</li>
            </ul>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="email@company.com"
                className={error ? 'error' : ''}
                required
              />
              {error && <em id="error-msg">{error}</em>}
              <button type="submit" className="sub-btn">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>

          {/* Right (image) */}
          <div className="image-wrapper">
            <img src={img} alt="Product Preview" className="product-img" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
