import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setStatus(null);

    if (!email || !pw) {
      setError("Please enter both email and password.");
      return;
    }

    // simulate async auth (replace with Firebase later)
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus(`Signed in as ${email}`);
      setEmail("");
      setPw("");
    }, 400);
  }

  return (
    <div className="container py-3">
      <h1 className="mb-3">Login</h1>

      {error && (
        <div className="alert alert-danger" role="alert" id="login_error">
          {error}
        </div>
      )}
      {status && (
        <div className="alert alert-success" role="status" aria-live="polite">
          {status}
        </div>
      )}

      <div className="row">
        <div className="col-12 col-md-6">
          <h2 className="h4">Sign In</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="login_email" className="form-label">
                Email
              </label>
              <input
                id="login_email"
                type="email"
                className={`form-control ${error ? "is-invalid" : ""}`}
                placeholder="you@uw.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-describedby={error ? "login_error" : undefined}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="login_pw" className="form-label">
                Password
              </label>
              <input
                id="login_pw"
                type="password"
                className={`form-control ${error ? "is-invalid" : ""}`}
                placeholder="******"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                required
                minLength={6}
                aria-describedby={error ? "login_error" : undefined}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  aria-hidden="true"
                ></span>
              )}
              {isSubmitting ? "Signing in…" : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
