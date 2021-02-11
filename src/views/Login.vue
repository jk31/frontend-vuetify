<template>
  <div class="pa-md-4 mx-auto" style="max-width:600px;">
    <v-card class="pa-6" elevation="2">
      <p class="display-1 text--primary">
        Login
      </p>

      <v-form @submit.prevent="login" lazy-validation>
        <v-text-field v-model="email" label="Email" required></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          name="Password"
          label="Password"
          @click:append="show = !show"
        ></v-text-field>

        <v-btn block color="success" @click="login">
          Login
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
    show: false
  }),
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
