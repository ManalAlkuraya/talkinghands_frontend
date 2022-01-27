import { NavLink, Link, Outlet } from "react-router-dom";
import { getRequesttranslator } from "../service";
import React from "react";

export default function Requesttranslator() {
  let requesttranslator = getRequesttranslator();
  return (
    <main style={{ padding: "1rem 0" }}>
      <div style={{ display: "flex", color: "#43a6ac" }}>

        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >


          {requesttranslator.map(translators => (
            <NavLink
              style={({ isActive }) => ({ display: "block", margin: "1rem 0", color: isActive ? "#43a6ac" : "" })}

              to={`/requesttranslator/${translators.id}`}
              key={translators.id}
            >
              {translators.name}
            </NavLink>

          ))}
        </nav>
      </div>
      <Outlet />
    </main>
  );
}