<template>
  <div class="pa-md-4 mx-auto" style="max-width:600px;">
    <v-card elevation="2">
      <v-form class="pa-6" ref="form" lazy-validation>
        <v-text-field v-model="name" label="Name" required></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          name="Password"
          label="Password"
          hint="At least 8 characters"
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
    name: "",
    password: "",
    show: false
  }),
  methods: {
    login() {
      console.log(this.name, this.password);
    }
  }
};
</script>

<style></style>
