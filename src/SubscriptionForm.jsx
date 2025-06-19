// SubscriptionForm.js
import React, { useState } from 'react';
import './SubscriptionForm.css';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Valid email required.');
      document.getElementById('email').style.borderColor = 'rgb(255, 99, 71)';
      document.getElementById('email').style.color = 'rgb(255, 99, 71)';
      document.getElementById('email').style.backgroundColor = 'rgba(255, 99, 71, 0.6)';
    } else {
      setError('');
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div className="main">
        <div className="thanks-for-sub">
          <span role="img" aria-label="success">✔</span>
          <h1>Thanks for subscribing!</h1>
          <p className="success-text">A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.</p>
          <button className="dismiss-btn" onClick={() => window.location.href = '/index.html'}>Dismiss message</button>
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
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
