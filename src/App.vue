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

    <notifications group="notifications" position="bottom center" />
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

<style lang="scss">
.vue-notification {
  padding: 10px;
  margin: 0 5px 5px;

  font-size: 14px;

  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
  border-radius: 5px;

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }

  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }
}
</style>
