import fetchIntercept from "fetch-intercept";
import { auth_endpoints } from "../consts";

const Interceptor = () => {
  fetchIntercept.register({
    request: function (url, config) {
      // Modify the url or config here
      if (auth_endpoints.includes(url)) {
        console.log(url);
        console.log(config);
        let auth = JSON.parse(localStorage.getItem("auth"));
        if (config) {
          config["headers"]["authorization"] = `Bearer ${auth.accessToken}`;
        } else {
          config = {
            headers: {
              authorization: `Bearer ${auth.accessToken}`,
            },
          };
        }
      } else {
        // dont intercept
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
};

export { Interceptor };
