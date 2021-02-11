<template>
  <div class="pa-md-4 mx-auto" style="max-width:600px;">
    <v-card class="pa-6" elevation="2">
      <p class="display-1 text--primary">
        Register
      </p>

      <v-form @submit.prevent="register" lazy-validation>
        <v-text-field v-model="email" label="Email" required></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          name="Password"
          label="Password"
          @click:append="show = !show"
        ></v-text-field>

        <v-text-field
          v-model="re_password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          name="Repeat Password"
          label="Repeat Password"
          @click:append="show = !show"
        ></v-text-field>

        <v-btn block color="success" @click="register">
          Register
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    email: "",
    password: "",
    re_password: "",
    show: false
  }),
  methods: {
    register() {
      this.$store.dispatch("register", {
        email: this.email,
        password: this.password,
        re_password: this.re_password
      });
    }
  }
};
</script>

<style></style>
