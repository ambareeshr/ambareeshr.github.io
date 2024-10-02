import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import Headroom from "react-headroom";
import { greeting } from "../../myData";

class Header extends Component {
  render() {
    const theme = this.props.theme;
    return (
    <Headroom>
      <Fade top duration={1000} distance="20px">
      <header className="header" style={{ backgroundColor: theme.body }}>
        <a href="/" className="logo">
          <span style={{ color: theme.text }}> &lt;</span>
          <span className="logo-name" style={{ color: theme.text }}>{greeting.logo_name}</span>
          <span style={{ color: theme.text }}>/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li> 
            
            <a href="#skills" style = {{ color: theme.text, cursor: 'pointer' }}>Skills</a>
          </li>
          <li>
            <a href="#patents" style = {{ color: theme.text, cursor: 'pointer' }}>Patents</a>
          </li>
          <li>
            <a href="#education" style = {{ color: theme.text, cursor: 'pointer' }}>Education</a>
          </li>
          <li>
            <a href="#experience" style = {{ color: theme.text, cursor: 'pointer' }}>Experience</a>
          </li>
          <li>
            <a href="#contact" style = {{ color: theme.text, cursor: 'pointer' }}>Contact Me</a>
          </li>
        </ul>
      </header>
      </Fade>
    </Headroom>
  );
}
}

export default Header;