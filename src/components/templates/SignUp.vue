<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <sign-up-form />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SignUpForm from "@/components/organisms/SignUpForm.vue";

export default {
  name: "SignUp",
  components: {
    SignUpForm
  }
};
</script>
