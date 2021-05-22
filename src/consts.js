export const api = "https://fechallenge.dev.bhyve.io";

export const signup_endpoint = "user/signup";
export const login_endpoint = "user/signin";
export const get_skills_endpoint = "skills";

export const open_endpoints = [
  `${api}/${signup_endpoint}`,
  `${api}/${login_endpoint}`,
  `${api}/${get_skills_endpoint}`,
];

export const max_skills_count = 8;
export const skills_per_page = 10;
