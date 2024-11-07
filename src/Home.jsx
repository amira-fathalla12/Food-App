/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <nav className="nav">
        <ul className="ul">
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>{" "}
            |
          </li>
          <li>
            <NavLink to="/users" activeClassName="active">
              Users
            </NavLink>{" "}
            |
          </li>
          <li>
            <NavLink to="/categories" activeClassName="active">
              Categories
            </NavLink>{" "}
            |
          </li>
          <li>
            <NavLink to="/recipes" activeClassName="active">
              Recipes
            </NavLink>{" "}
            |
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>{" "}
            |
          </li>
          <li>
            <NavLink to="/change-password" activeClassName="active">
              ChangPassword
            </NavLink>{" "}
            |
          </li>
          <li>
            <NavLink to="/forgot-password" activeClassName="active">
              ForgotPassword
            </NavLink>{" "}
            |
          </li>
          <li>
            <NavLink to="/reset-password" activeClassName="active">
              ResetPassword
            </NavLink>{" "}
            |
          </li>
          <li>
            <NavLink to="/register" activeClassName="active">
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Display nested routes here */}
    </div>
  );
}
