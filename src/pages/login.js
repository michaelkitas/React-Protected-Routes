import React, { Component } from "react";

export class login extends Component {
  onLogin = () => {
    window.localStorage.setItem("isAuthenticated", true);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <button onClick={this.onLogin}>Login</button>{" "}
        <a id="href" href="/protected">
          protected
        </a>
      </div>
    );
  }
}

export default login;
