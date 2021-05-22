import fetchIntercept from "fetch-intercept";
import { open_endpoints } from "../consts";

const Interceptor = () => {
  fetchIntercept.register({
    request: function (url, config) {
      // Modify the url or config here
      if (open_endpoints.includes(url)) {
        // dont intercept
      } else {
        let auth = JSON.parse(localStorage.getItem("auth"));
        config["headers"]["authorization"] = `Bearer ${auth.accessToken}`;
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
