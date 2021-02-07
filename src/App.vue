<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn to="/" color="accent" rounded>Home</v-btn>
      <v-spacer></v-spacer>
      <v-btn to="/login" color="accent" rounded>Login</v-btn>
      <v-btn to="/about" color="accent" rounded>About</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
