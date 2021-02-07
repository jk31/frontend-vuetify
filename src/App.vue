<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn class="mx-2" color="accent">Home</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="mx-2" :color="isAuthenticated ? 'success' : 'error'">{{
        isAuthenticated ? "Authenticated" : "Not Authenticated"
      }}</v-btn>
      <v-btn class="mx-2" to="/login" color="accent">Login</v-btn>
      <v-btn class="mx-2" to="/about" color="accent">About</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
};
</script>
