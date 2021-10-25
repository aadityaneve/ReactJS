import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      // State object
      count: 0,
    };
  }

  incrementCounter() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value: ", this.state.count);
    //   }
    // );

    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => console.log(this.state.count)
    );
  }

  incrementByFive() {
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
  }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.incrementByFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
