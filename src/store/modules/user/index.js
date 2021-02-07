import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

import router from "@/router";

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
          email: payload.email,
          password: payload.password
        }
      });
      context.commit("UPDATE_IS_AUTHENTICATED", true);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  },
  async logout(context) {
    try {
      await axios({
        method: "get",
        withCredentials: true,
        url: "/api/logout/",
        headers: {
          Accept: "application/json"
        }
      });
      context.commit("UPDATE_IS_AUTHENTICATED", false);
    } catch (error) {
      console.log(error);
    }
  },
  async session(context) {
    try {
      const response = await axios({
        method: "get",
        withCredentials: true,
        url: "/api/session/",
        headers: {
          Accept: "application/json"
        }
      });
      context.commit("UPDATE_IS_AUTHENTICATED", response.data.isAuthenticated);
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
