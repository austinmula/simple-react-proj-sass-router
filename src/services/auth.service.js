import axios from "axios";
const API_URL = "http://localhost:4001/auth/login/";

const login = (user) => {
  return axios
    .post(API_URL, {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export default {
  login,
};
