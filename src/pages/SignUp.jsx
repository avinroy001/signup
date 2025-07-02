import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import desktopImg from "../assets/img.png";
import mobileImg from "../assets/img.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      navigate("/success.html", { state: { email } });
    } else {
      setError(true);
    }
  };

  return (
    <div className="main">
      <img src={desktopImg} alt="Decorative" style={{ width: "100px", marginBottom: "1rem" }} />
      <picture>
        <source media="(max-width: 768px)" srcSet={mobileImg} />
        <img src={desktopImg} alt="Preview" className="responsive-img" />
      </picture>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Stay updated!</h2>
        <p>Join our newsletter to:</p>
        <ul>
          <li>Get the latest news</li>
          <li>Access exclusive offers</li>
          <li>Receive valuable insights</li>
        </ul>

        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          className={error ? "invalid" : ""}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(false);
          }}
        />
        {error && <em>Valid email required.</em>}

        <button type="submit" className="sub-btn">Subscribe</button>
      </form>

      <div className="footer">
        Challenge by <a href="https://crio.do" target="_blank" rel="noreferrer">Crio</a>.
      </div>
    </div>
  );
};

export default SignUp;
