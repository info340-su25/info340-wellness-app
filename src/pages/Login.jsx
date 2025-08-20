import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !pw) return;
    alert(`Logged in as ${email}`);
  }

  return (
    <>
      <h1>Login</h1>
      <div className="flex-container">
        <section className="left-sect">
          <h2>Sign In</h2>
          <form className="half_form" onSubmit={handleSubmit}>
            <label htmlFor="login_email">Email:</label>
            <input
              id="login_email"
              type="email"
              placeholder="you@uw.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="login_pw">Password:</label>
            <input
              id="login_pw"
              type="password"
              placeholder="******"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              required
              minLength={6}
            />

            <button type="submit">Log In</button>
          </form>
        </section>
      </div>
    </>
  );
}