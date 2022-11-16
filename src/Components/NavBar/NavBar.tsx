import React from "react";
import CSS from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
interface NavBarProps {
  title?: string;
}

class NavBar extends React.Component<NavBarProps> {
  render() {
    return (
      <div className={CSS.navbar}>
        <div className={CSS["navbar-title"]}>{this.props.title}</div>
        <div className={CSS["navbar-menu"]}>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className={CSS["navbar-menu"]}>
          <NavLink to="/About">About</NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
