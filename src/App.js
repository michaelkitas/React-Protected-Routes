import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/homepage";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Protected from "./pages/protected";

import ProtectedRouter from "./ProtectedRouter";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <ProtectedRouter path="/protected" component={Protected} />
      </Router>
    );
  }
}
