import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SubscriptionForm.css';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';

  return (
    <div className="main">
      <div className="thanks-for-sub">
        <span role="img" aria-label="success">✔</span>
        <h1>Thanks for subscribing!</h1>
        <p className="success-text">
          A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the link to confirm your subscription.
        </p>
        <button className="dismiss-btn" onClick={() => navigate('/')}>
          Dismiss message
        </button>
      </div>
      <div className="footer">
        Challenge by <a href="https://crio.do">CrioDo</a>.  Coded by Akash KT.
      </div>
    </div>
  );
};

export default Success;