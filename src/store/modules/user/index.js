import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

const state = {
  isAuthenticated: false
};

const mutations = {
  UPDATE_IS_AUTHENTICATED(state, payload) {
    state.isAuthenticated = payload;
  }
};

const actions = {
  async setCSRF() {
    const response = await axios({
      method: "get",
      withCredentials: true,
      url: "/api/csrf/",
      headers: {
        Accept: "application/json"
      }
    });
    return response.headers["x-csrftoken"];
  },
  async login(context, payload) {
    try {
      await axios({
        method: "post",
        withCredentials: true,
        url: "/api/login/",
        headers: {
          "X-CSRFToken": await context.dispatch("setCSRF"),
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        data: {
          username: payload.username,
          password: payload.password
        }
      });
      context.commit("UPDATE_IS_AUTHENTICATED", true);
    } catch (error) {
      console.log(error);
    }
  }
};

const getters = {
  isAuthenticated: state => state.isAuthenticated
};

const userModule = {
  state,
  mutations,
  actions,
  getters
};

export default userModule;
