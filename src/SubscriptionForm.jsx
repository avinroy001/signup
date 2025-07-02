import { useState } from "react";

function SubscriptionForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      setError("");
      onSuccess(email);
    } else {
      setError("Valid email required.");
    }
  };

  return (
    <div className="sign-up-form">
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={
            error
              ? {
                  borderColor: "rgb(255, 99, 71)",
                  color: "rgb(255, 99, 71)",
                  backgroundColor: "rgba(255, 99, 71, 0.6)",
                }
              : {}
          }
        />
        {error && <em>{error}</em>}
        <button type="submit" className="sub-btn">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default SubscriptionForm;