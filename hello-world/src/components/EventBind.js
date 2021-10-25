import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye!",
  //     });
  //   }

  clickHandler = () => {
    this.setState({
      message: "Goodbye!",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;

// Approach 1 - (not suitable for big application) bind using bind keyword by passing this keyword (Binding in render)
// Approach 2 - (not suitable for big application) arrow function in render
// Approach 3 - (react documentation suggest it)binding in class constructor
// (Best) Approach 4 - (react documentation suggest it) class property as arrow functions
