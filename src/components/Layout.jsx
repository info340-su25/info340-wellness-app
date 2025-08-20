import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <nav>
        <div id="company-name">
          <NavLink to="/">HuskyHealth Tracker</NavLink>
        </div>
        <div id="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/log">Log</NavLink>
          <NavLink to="/streaks">Streaks</NavLink>
          <NavLink to="/diary">Diary</NavLink>
          
          <NavLink to="/login" className="login-icon" aria-label="Log in" title="Log in">
            <img src="/img/account.svg" alt="" width="24" height="24" />
          </NavLink>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2025 HuskyHealth Tracker</p>
      </footer>
    </>
  );
}
