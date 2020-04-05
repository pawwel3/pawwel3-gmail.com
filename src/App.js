import React, { Component } from "react";
import "./App.css";
import Greeting from "./Greeting";
import Name from "./Name";
import Text from "./Text";
import Footer from "./footer";
import Button from "./button";
class App extends Component {
  state = {
    /*  task: [
      { id: 1, text: "witam" },
      { id: 2, text: "żegnam" },
      { id: 3, text: "wypirdalaj" }
    ]*/
    text1: "witam",
    text2: "żegnam",
    name: "Samochody"
  };

  render() {
    return (
      <>
        <Greeting greeting={this.state.text2} />,
        <Name n={this.state.name} />
        <Text />
        <Button />
        <Footer />
      </>
    );
  }
}

export default App;
