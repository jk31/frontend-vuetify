import baseAxios from "axios";

const axios = baseAxios.create({
  // .. where we make our configurations
  baseURL: "http://localhost:8000/api/",
  xsrfHeaderName: "X-CSRFTOKEN",
  xsrfCookieName: "csrftoken"
});

export default axios;
