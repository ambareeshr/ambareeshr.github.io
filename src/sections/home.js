import React, { Component } from "react";
import Header from "../shared/header/Header";
import GreetingMinimal from "../containers/greeting/GreetingMinimal";
//import Skills from "../containers/skills/Skills";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <GreetingMinimal theme={this.props.theme} />
        {/*<Skills theme={this.props.theme} */ }
      </div>
    );
  }
}

export default Home;
