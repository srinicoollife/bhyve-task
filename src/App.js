import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/login";
import Header from "./components/header";
import SignUp from "./screens/signUp";
import BasicInfo from "./screens/basicInfo";
import Profile from "./screens/profile";

import fetchIntercept from "fetch-intercept";
import { open_endpoints } from "./consts";

fetchIntercept.register({
  request: function (url, config) {
    // Modify the url or config here
    console.log(url);

    if (open_endpoints.includes(url)) {
      console.log("no intercept");
    } else {
      console.log("yes intercept");
      let auth = localStorage.getItem("auth");
      console.log(auth);
      console.log(JSON.parse(auth));
    }
    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function (response) {
    // Modify the reponse object
    return response;
  },

  responseError: function (error) {
    // Handle an fetch error
    return Promise.reject(error);
  },
});

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
          <Route path="/basicinfo">
            <BasicInfo />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
