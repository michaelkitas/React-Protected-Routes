import React, { Component } from "react";

export class protectedFirst extends Component {
  render() {
    return (
      <div>
        <h1>Hello this is the protected page</h1>{" "}
        <button
          onClick={() => {
            this.props.history.push("/logout");
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default protectedFirst;
