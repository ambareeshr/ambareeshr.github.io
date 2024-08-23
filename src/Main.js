import React, { Component } from "react";
//import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./sections/home";
import Contact from "./sections/contact";
import Footer from "./shared/footer/Footer";
import TopButton from "./shared/topButton/TopButton";
import Education from "./sections/education";
import Experience from "./sections/experience";
import {Awards} from "./sections/awards";
import Publications from "./sections/publications";
import Certifications from "./sections/certifications";


export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);
    return (
        <div>
            <Home theme={this.props.theme} />
            <Education theme={this.props.theme} />
            <Experience theme={this.props.theme} />
            <Publications theme={theme} />
            <Awards theme={theme} />
            <Certifications theme={this.props.theme} />
            <Contact theme={this.props.theme} />
            <Footer theme={this.props.theme} />
            <TopButton theme={this.props.theme} />
        </div>
      );
    }
  }