import React, { useState, useEffect } from "react";
import { postCall } from "../utils/helper";
import { signup_endpoint } from "../consts";
import Toast from "../components/toast";
import { useHistory } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const [loading, setloading] = useState(false);
  const [showToast, setshowToast] = useState(false);
  const [error, setError] = useState([]);
  const history = useHistory();

  const handle_signupClick = async (event) => {
    event.preventDefault(); // to stop page from reloading
    setloading(true);
    setError([]);

    let payload = {
      username,
      password,
    };
    let res = await postCall(signup_endpoint, payload);
    if (res.ok) {
      setloading(false);
      setshowToast(true);
      setTimeout(() => {
        history.push(`/login`, { username });
      }, 4000);
    } else {
      setloading(false);
      res.json().then((error) => setError([].concat(error.message)));
    }
  };

  return (
    <div>
      {loading && (
        <FadeLoader
          type="ThreeDots"
          color="lightblue"
          loading={loading}
          size={15}
          css={{ position: "absolute", left: "49%", top: "50%" }}
        />
      )}
      <div id="login_container">
        <Toast
          showToast={showToast}
          msg="Successfully signed up to Bhyve! Lets login"
        />
        <h5 className="text-center mb-5">Signup to Bhyve</h5>
        <form onSubmit={handle_signupClick}>
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
          <button
            type="submit"
            className="btn btn-primary mt-4 w-100 text-center"
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
