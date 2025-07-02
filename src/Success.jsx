function Success({ email, onDismiss }) {
  return (
    <div className="thanks-for-sub">
      <img src="/icon-success.svg" alt="Success" />
      <h1>Thanks for subscribing!</h1>
      <p className="success-text">
        A confirmation email has been sent to <strong>{email}</strong>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button className="dismiss-btn" onClick={onDismiss}>
        Dismiss message
      </button>
    </div>
  );
}

export default Success;