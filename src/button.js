import React, { Component } from "react";
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true
    };
  }
  handelClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };
  render() {
    return (
      <button onClick={this.handelClick}>
        {this.state.isActive ? "pokaż" : "ukryj"}
      </button>
    );
  }
}

export default Button;
