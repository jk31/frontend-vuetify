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
      <userErrorAlert
        error="loginError"
        errorText="Please check your credentials."
      />
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import userErrorAlert from "@/components/userErrorAlert";

export default {
  name: "Login",
  components: {
    userErrorAlert
  },
  data: () => ({
    email: "",
    password: "",
    show: false
  }),
  methods: {
    ...mapActions(["login"])
  }
};
</script>

<style></style>
