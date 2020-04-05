import React, { Component } from "react";
import "./App.css";
import Greeting from "./Greeting";
import Name from "./Name";
import Text from "./Text";
class App extends Component {
  state = {
    /*  task: [
      { id: 1, text: "witam" },
      { id: 2, text: "żegnam" },
      { id: 3, text: "wypirdalaj" }
    ]*/
    text1: "witam",
    text2: "żegnam"
  };

  render() {
    return (
      <>
        <Greeting greeting={this.state.text2} />,
        <Name />
        <Text />
      </>
    );
  }
}

export default App;
