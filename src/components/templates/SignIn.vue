<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <sign-in-form />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SignInForm from "@/components/organisms/SignInForm.vue";

export default {
  name: "SignIn",
  components: {
    SignInForm
  }
};
</script>
