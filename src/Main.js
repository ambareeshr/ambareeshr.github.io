import React, { Component } from "react";
//import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./sections/home";
import Contact from "./sections/contact";
import Footer from "./shared/footer/Footer";
import TopButton from "./shared/topButton/TopButton";
import Education from "./sections/education";
import Experience from "./sections/experience";
import {Awards} from "./sections/awards";
import PublicationsMinimal from "./sections/publications_minimal";
import Certifications from "./sections/certifications";
import PatentsMinimal from "./sections/patents_minimal";
import Skills from "./containers/skills/Skills";


export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);
    return (
        <div style={{ background: theme.body }}>
            <Home theme={this.props.theme} />
            <Skills theme={this.props.theme} />
            <PatentsMinimal theme={this.props.theme} />
            <PublicationsMinimal theme={theme} />
            <Education theme={this.props.theme} />
            <Experience theme={this.props.theme} />
            {/*<Projects theme={theme} />*/}
            <Awards theme={this.props.theme} />
            <Certifications theme={this.props.theme} />
            <Contact theme={this.props.theme} />
            <Footer theme={this.props.theme} />
            <TopButton theme={this.props.theme} />
        </div>
      );
    }
  }