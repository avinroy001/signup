import { useState } from "react";
import SubscriptionForm from "./SubscriptionForm";
import Success from "./Success";
import "./App.css";

function App() {
  const [submittedEmail, setSubmittedEmail] = useState("");

  return (
    <div className="main">
      {submittedEmail ? (
        <Success email={submittedEmail} onDismiss={() => setSubmittedEmail("")} />
      ) : (
        <SubscriptionForm onSuccess={setSubmittedEmail} />
      )}
      <footer className="footer">
        <p>
          Challenge by <a href="https://crio.do">Crio</a>
        </p>
      </footer>
    </div>
  );
}

export default App;