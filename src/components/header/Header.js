import React, { Component } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

class Header extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={"/"} tag={Link} className="logo">
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li>
                <NavLink
                  to="/ydelser"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                >
                  Ydelser
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/om"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                >
                  Om
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kontakt"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                >
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </div>
    );
  }
}
export default Header;
