import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {

    // return this.state.isLoggedIn && <div>Welcome Aditya</div>;

    return (
        this.state.isLoggedIn ?
        <div>Welcome Aditya</div> :
        <div>Welcome Guest</div>
    )
  }
}


export default UserGreeting;