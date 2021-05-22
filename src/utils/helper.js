import { api } from "../consts";

const postCall = (url, payload) => {
  return fetch(`${api}/${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((res) => {
    console.log(res);
    return res;
  });
};

const getCall = (url) => {
  return fetch(`${api}/${url}`).then((res) => {
    console.log(res);
    return res;
  });
};

export { postCall, getCall };
