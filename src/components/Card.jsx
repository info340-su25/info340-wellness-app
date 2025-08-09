import React from "react";

import { NavLink } from "react-router";

export default function Card({ to, icon, children }) {
  return (
    <NavLink to={to} className="log-card">
      <span className="material-symbols-outlined" aria-hidden>
        hotel
      </span>{" "}
      {children}
    </NavLink>
  );
}
