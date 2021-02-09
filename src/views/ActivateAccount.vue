<template>
  <div class="pa-md-4 mx-auto" style="max-width:600px;">
    <h1>Account Activation</h1>
    <v-btn block color="success" @click="activate">
      Activate Account
    </v-btn>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  name: "ActivateAccount",
  methods: {
    activate() {
      axios({
        method: "post",
        withCredentials: true,
        url: "users/activation/",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        data: {
          uid: this.$route.params.uid,
          token: this.$route.params.token
        }
      })
        .then(() => this.$router.push("/login"))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style></style>
