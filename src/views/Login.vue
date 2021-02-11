<template>
  <div class="pa-md-4 mx-auto" style="max-width:600px;">
    <v-card class="pa-6" elevation="2">
      <p class="display-1 text--primary">
        Login
      </p>

      <v-form @submit.prevent="login({ email, password })" lazy-validation>
        <v-text-field v-model="email" label="Email" required></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          name="Password"
          label="Password"
          @click:append="show = !show"
        ></v-text-field>

        <v-btn block color="success" @click="login({ email, password })">
          Login
        </v-btn>
      </v-form>
    </v-card>

    <v-alert
      :value="userErrors('loginError')"
      @click="removeUserError({ error: 'loginError' })"
      dismissible
      elevation="2"
      colored-border
      border="left"
      color="error"
    >
      Please check your credentials and try again.
    </v-alert>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
    show: false
  }),
  computed: {
    ...mapGetters(["userErrors"])
  },
  methods: {
    ...mapActions(["login", "removeUserError"])
  }
};
</script>

<style></style>
