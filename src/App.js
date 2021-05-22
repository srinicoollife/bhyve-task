import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/login";
import Header from "./components/header";
import SignUp from "./screens/signUp";

function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
