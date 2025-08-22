import { NavLink } from "react-router";

export default function Card({ to, icon = "info", children }) {
  return (
    <NavLink to={to} className="log-card">
      <span className="material-symbols-outlined" aria-hidden>
        {icon}
      </span>
      <span className="card-label">{children}</span>
    </NavLink>
  );
}
