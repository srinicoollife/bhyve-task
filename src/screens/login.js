import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postCall } from "../utils/helper";
import { login_endpoint } from "../consts";
import Toast from "../components/toast";

const Login = () => {
  const [username, setusername] = useState("testemail@gmail.com");
  const [password, setpassword] = useState("Password1");

  const [loading, setloading] = useState(false);
  const [showToast, setshowToast] = useState(false);
  const [error, setError] = useState([]);
  const history = useHistory();

  useEffect(() => {
    history.location.state && setusername(history.location.state.username);
  }, [history.location.state]);

  const handle_loginClick = async (event) => {
    event.preventDefault(); // to stop page from reloading
    setloading(true);
    setError([]);

    let payload = {
      username,
      password,
    };
    let res = await postCall(login_endpoint, payload);
    if (res.ok) {
      setloading(false);
      setshowToast(true);
      res.json().then((res) => {
        console.log(res);
        window.localStorage.setItem("auth", JSON.stringify(res));
        if (res.user.profileCompleted) {
          history.push(`/profile`);
        } else {
          history.push(`/basicinfo`);
        }
      });
    } else {
      setloading(false);
      res.json().then((error) => setError([].concat(error.message)));
    }
  };

  return (
    <div id="login_container">
      {loading && <p>Loading .....</p>}
      <Toast showToast={showToast} msg="Successfully Loged in to Bhyve!" />
      <h5 className="text-center mb-5">Login to Bhyve</h5>
      <form onSubmit={handle_loginClick}>
        <div>
          <label htmlFor="username">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="username"
            value={username}
            onChange={(event) => setusername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
          />
          {error.map((message, index) => (
            <p className="error_message" key={index}>
              {message}
            </p>
          ))}
        </div>
        <Link to="/signup" style={{ float: "right" }}>
          Not a user? Signup
        </Link>
        <button
          type="submit"
          className="btn btn-primary mt-4 w-100 text-center"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
