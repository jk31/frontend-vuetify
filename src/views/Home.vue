<template>
  <div class="home">
    <h1>Home</h1>
    <v-btn @click="me" class="mx-2" color="accent">Me</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    me() {
      this.$store.dispatch("me");
    }
  }
};
</script>
