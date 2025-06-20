import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdCheck } from 'react-icons/md'; // ✅ React icon
import './App.css';

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || localStorage.getItem('subscriberEmail') || '';

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="check-icon-wrapper">
          <MdCheck className="check-icon" />
        </div>
        <h1>Thanks for subscribing!</h1>
        <p className="success-text">
          A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.
        </p>
        <button className="dismiss-btn" onClick={() => navigate('/')}>Dismiss message</button>
      </div>
    </div>
  );
}

export default Success;
