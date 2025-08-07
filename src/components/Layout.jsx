import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <div id="company-name">
          <NavLink to="/">HuskyHealth Tracker</NavLink>
        </div>
        <div id="nav-links">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/log">Log</NavLink>
          <NavLink to="/streaks">Streaks</NavLink>
          <NavLink to="/diary">Diary</NavLink>
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
