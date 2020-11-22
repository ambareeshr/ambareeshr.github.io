import React, { Component } from "react";
import "./Degrees.css";
import DegreeCard from "../../cards/degreeCard/DegreeCard.js";
import { degrees } from "../../myData";
import { Fade } from "react-reveal";

class Degrees extends Component {
    render() {
        const theme = this.props.theme;
        return (
        <div className="degree-section" id="educations">
            <div className="educations-header-div">
            <Fade bottom duration={2000} distance="20px">
                <h1 className="educations-header" style={{ color: theme.text }}>
                Degrees Received
                </h1>
            </Fade>
            </div>
            <div className="educations-body-div">
            {degrees.degrees.map((degree) => {
                return <DegreeCard degree={degree} theme={theme} />;
            })}
            </div>
        </div>
        );
    }
}

export default Degrees;