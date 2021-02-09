<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn to="/" class="mx-2" color="accent">Home</v-btn>
      <v-btn class="mx-2" to="/about" color="accent">About</v-btn>

      <v-spacer></v-spacer>

      <v-btn class="mx-2" :color="isAuthenticated ? 'success' : 'error'">{{
        isAuthenticated ? "Authenticated" : "Not Authenticated"
      }}</v-btn>
      <v-btn v-if="!isAuthenticated" class="mx-2" to="/login" color="accent"
        >Login</v-btn
      >
      <v-btn v-if="!isAuthenticated" class="mx-2" to="/register" color="accent"
        >Register</v-btn
      >
      <v-btn v-if="isAuthenticated" @click="logout" class="mx-2" color="accent"
        >Logout</v-btn
      >
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  methods: {
    ...mapActions(["logout"])
  }
};
</script>
