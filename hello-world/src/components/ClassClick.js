import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("You clicked the button");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>ClassClickBtn</button>
      </div>
    );
  }
}

export default ClassClick;
