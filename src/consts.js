export const api = "https://fechallenge.dev.bhyve.io";

export const signup_endpoint = "user/signup";
export const login_endpoint = "user/signin";
export const get_skills_endpoint = "skills";
export const post_skills_endpoint = "user/skills";
export const post_profile_endpoint = "user/basic/profile";
export const get_profile_endpoint = "user/profile";

export const open_endpoints = [
  `${api}/${signup_endpoint}`,
  `${api}/${login_endpoint}`,
  `${api}/${get_skills_endpoint}`,
];

export const min_skills_count = 3;
export const max_skills_count = 8;
export const skills_per_page = 10;
