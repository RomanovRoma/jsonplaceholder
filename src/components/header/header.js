import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav">
        <li>
          <NavLink exact to="/users" replace>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" replace>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/albums" replace>
            Albums
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
