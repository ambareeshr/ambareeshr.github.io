import React, { Component } from "react";
import Degrees from "../../containers/degree/Degrees";
import Certifications from "../../containers/certifications/Certifications";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
    render() {
        const theme = this.props.theme;
        return (
        <div className="education-main" id="education">
            {/*<Header theme={this.props.theme} />*/}
            <div className="basic-education">
            <Fade bottom duration={2000} distance="40px">
                <div className="heading-div">
                <div className="heading-text-div heading-text">
                    <h1 style={{ color: theme.text }} className="education-header">
                    Education
                    </h1>
                </div>
                </div>
            </Fade>
            <Degrees theme={this.props.theme} />
            <Certifications theme={this.props.theme} />
            </div>
        </div>
        );
    }
    }

export default Education;
