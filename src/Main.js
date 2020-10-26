import React, { Component } from "react";
//import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./pages/home/HomeComponent";
import Contact from "./pages/contact/ContactComponent";
import Footer from "./shared/footer/Footer";
import TopButton from "./shared/topButton/TopButton";


export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);
    return (
        <div>
            <Home theme={this.props.theme} />
            <Contact theme={this.props.theme} />
            <Footer theme={this.props.theme} />
            <TopButton theme={this.props.theme} />
          {/*
          <HashRouter basename="/">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/home"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/contact"
                render={(props) => <Contact {...props} theme={this.props.theme} />}
              />
            </Switch>
          </HashRouter>
        */}
        </div>
      );
    }
  }
