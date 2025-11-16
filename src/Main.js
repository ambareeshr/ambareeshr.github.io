import React, { Component } from "react";
//import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./sections/home";
import Contact from "./sections/contact";
import Footer from "./shared/footer/Footer";
import TopButton from "./shared/topButton/TopButton";
import SectionNav from "./shared/sectionNav/SectionNav";
import EducationMinimal from "./sections/education_minimal";
import ExperienceMinimal from "./sections/experience_minimal";
import {Awards} from "./sections/awards_minimal";
import PublicationsMinimal from "./sections/publications_minimal";
import CertificationsMinimal from "./sections/certifications_minimal";
import PatentsMinimal from "./sections/patents_minimal";
import SkillsMinimal from "./containers/skills/SkillsMinimal";


export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);
    return (
        <div style={{ background: theme.body }}>
            <SectionNav theme={this.props.theme} />
            <Home theme={this.props.theme} />
            <SkillsMinimal theme={this.props.theme} />
            <ExperienceMinimal theme={this.props.theme} />
            <PatentsMinimal theme={this.props.theme} />
            <PublicationsMinimal theme={theme} />
            <EducationMinimal theme={this.props.theme} />
            {/*<Projects theme={theme} />*/}
            <Awards theme={this.props.theme} />
            <CertificationsMinimal theme={this.props.theme} />
            <Contact theme={this.props.theme} />
            <Footer theme={this.props.theme} />
            <TopButton theme={this.props.theme} />
        </div>
      );
    }
  }