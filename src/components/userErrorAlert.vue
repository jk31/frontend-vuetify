<template>
  <div>
    <v-alert
      :value="userErrors(error)"
      @click="removeUserError(error)"
      dismissible
      elevation="2"
      colored-border
      border="left"
      color="error"
    >
      {{ errorText }}
    </v-alert>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "userErrorAlert",
  props: {
    error: String,
    errorText: String
  },
  computed: {
    ...mapGetters(["userErrors"])
  },
  methods: {
    ...mapActions(["removeUserError"])
  }
};
</script>

<style></style>
