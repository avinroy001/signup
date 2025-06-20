// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SubscriptionForm.css';

// export default function SubscriptionForm() {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(email)) {
//       setError('Valid email required.');
//     } else {
//       setError('');
//       navigate('/success', { state: { email } });
//     }
//   };

//   return (
//     <div className="main">
//       <div className="card-container">
//         <img src={window.innerWidth <= 768 ? '/mobile.jpg' : '/desktop.jpg'} alt="Product Image" className="product-img" />

//         <div className="form-wrapper">
//           <h1>Stay updated!</h1>
//           <p>Join hundreds of creators using our product daily. Benefits include:</p>
//           <ul>
//             <li>✔ Real-time updates</li>
//             <li>✔ Premium support</li>
//             <li>✔ Exclusive features</li>
//           </ul>

//           <form onSubmit={handleSubmit}>
//             <label htmlFor="email">Email address</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="email@company.com"
//               className={error ? 'error' : ''}
//               required
//             />
//             {error && <em id="error-msg">{error}</em>}
//             <button type="submit" className="sub-btn">Subscribe to monthly newsletter</button>
//           </form>
//         </div>
//       </div>

//       <footer className="footer">
//         <p>Challenge by <a href="https://crio.do"  target="_blank" rel="noreferrer">Crio</a>.</p>
//       </footer>
//     </div>
//   );
// }