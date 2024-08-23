import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../myData";
import { FaReact, FaGithub } from 'react-icons/fa';

export default function Footer(props) {
  const iconStyle = {
    verticalAlign: 'middle',
    fontSize: '1.2em',
    margin: '0 5px',
  };

  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with 
          <FaReact style={{...iconStyle, color: '#61DAFB'}} title="React" />
          , 
          <FaGithub style={{...iconStyle, color: '#181717'}} title="GitHub" />
          {' '}and 
          <span role="img" aria-label="heart" style={{...iconStyle, fontSize: '1em'}}>❤️</span> 
          by {greeting.title}
        </p>
      </Fade>
    </div>
  );
}