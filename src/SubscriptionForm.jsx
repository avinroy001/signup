import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubscriptionForm.css';

const SubscriptionForm = () => {
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
      navigate('/success.html', { state: { email } });
    }
  };

  if (window.location.pathname === '/success.html') {
    const email = window.history.state?.email || '';
    return (
      <div className="main">
        <div className="thanks-for-sub">
          <span role="img" aria-label="success">✔</span>
          <h1>Thanks for subscribing!</h1>
          <p className="success-text">A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.</p>
          <button className="dismiss-btn" onClick={() => navigate('/')}>Dismiss message</button>
        </div>
        <div className="footer">
          Challenge by <a href="https://crio.do">CrioDo</a>. Coded by Akash KT.
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="sign-up-form">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(''); 
            }}
            placeholder="Email Address"
            className={error ? 'error' : ''}
          />
          {error && <em>{error}</em>}
          <button type="submit" className="sub-btn">Subscribe to monthly newsletter</button>
        </form>
      </div>
      <div className="footer">
        Challenge by <a href="https://crio.do">CrioDo</a>. Coded by Akash KT.
      </div>
    </div>
  );
};

export default SubscriptionForm;