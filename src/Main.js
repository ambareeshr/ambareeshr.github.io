import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./pages/home/HomeComponent";


export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);
    return (
        <div>
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
            </Switch>
          </HashRouter>
        </div>
      );
    }
  }
