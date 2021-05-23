import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Login from "./screens/login";
import Header from "./components/header";
import SignUp from "./screens/signUp";
import BasicInfo from "./screens/basicInfo";
import Profile from "./screens/profile";
import { Interceptor } from "./utils/interceptor";

function App() {
  Interceptor();
  return (
    <div className="container">
      <HashRouter>
        <Header />
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
      </HashRouter>
    </div>
  );
}

export default App;
