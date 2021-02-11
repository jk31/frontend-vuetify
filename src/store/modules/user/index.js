import axios from "@/axios";

import router from "@/router";

const state = {
  isAuthenticated: false,
  userErrors: {
    loginError: false,
    registerError: false,
    activationError: false
  }
};

const mutations = {
  UPDATE_IS_AUTHENTICATED(state, payload) {
    state.isAuthenticated = payload;
  },
  UPDATE_USER_ERROR(state, payload) {
    state.userErrors[payload] = !state.userErrors[payload];
  }
};

const actions = {
  removeUserError(context, payload) {
    context.commit("UPDATE_USER_ERROR", payload);
  },
  async session(context) {
    try {
      const response = await axios({
        method: "get",
        withCredentials: true,
        url: "session/",
        headers: {
          Accept: "application/json"
        }
      });
      context.commit("UPDATE_IS_AUTHENTICATED", response.data.isAuthenticated);
    } catch (error) {
      console.log(error);
      throw new Error("SERVER PROBLEM");
    }
  },
  async login(context, payload) {
    try {
      await axios({
        method: "post",
        withCredentials: true,
        url: "login/",
        headers: {
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
      context.commit("UPDATE_USER_ERROR", "loginError");
    }
  },
  async logout(context) {
    try {
      await axios({
        method: "get",
        withCredentials: true,
        url: "logout/",
        headers: {
          Accept: "application/json"
        }
      });
      context.commit("UPDATE_IS_AUTHENTICATED", false);
    } catch (error) {
      console.log(error);
    }
  },
  async register(context, payload) {
    try {
      await axios({
        method: "post",
        withCredentials: true,
        url: "users/",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        data: {
          email: payload.email,
          password: payload.password,
          re_password: payload.re_password
        }
      });
      //context.commit("UPDATE_IS_AUTHENTICATED", true);
      // router.push("/login");
    } catch (error) {
      console.log(error);
    }
  },
  me() {
    axios({
      method: "get",
      withCredentials: true,
      url: "users/me",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  userErrors: state => error => state.userErrors[error]
};

const userModule = {
  state,
  mutations,
  actions,
  getters
};

export default userModule;
