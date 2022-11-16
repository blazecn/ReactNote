import React from "react";
import CSS from "./NavBar.module.css";

interface NavBarProps {
  title?: string;
}

class NavBar extends React.Component<NavBarProps> {
  render() {
    return <div className={CSS.navbar}>{this.props.title}</div>;
  }
}

export default NavBar;
