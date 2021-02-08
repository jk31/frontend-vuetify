import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

import router from "@/router";

const state = {
  isAuthenticated: false,
  loginError: false
};

const mutations = {
  UPDATE_IS_AUTHENTICATED(state, payload) {
    state.isAuthenticated = payload;
  },
  UPDATE_LOGIN_ERROR(state, payload) {
    state.loginError = payload;
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
      context.commit("UPDATE_LOGIN_ERROR", true);
    }
  },
  removeLoginError(context) {
    context.commit("UPDATE_LOGIN_ERROR", false);
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
  },
  async createAccount(context, payload) {
    try {
      await axios({
        method: "post",
        withCredentials: true,
        url: "/user/",
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
      //context.commit("UPDATE_IS_AUTHENTICATED", true);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  },
  me() {
    axios({
      method: "get",
      withCredentials: true,
      url: "/djoser/users/me",
      headers: {
        // "X-CSRFToken": await context.dispatch("setCSRF"),
        Accept: "application/json"
      }
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  loginError: state => state.loginError
};

const userModule = {
  state,
  mutations,
  actions,
  getters
};

export default userModule;
