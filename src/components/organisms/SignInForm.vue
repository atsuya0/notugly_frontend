<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-grey lighten-4">
      <v-toolbar-title>
        Sign In Form
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="email"
          prepend-icon="email"
          name="email"
          label="E-mail"
          type="email"
          :counter="32"
          :rules="[rules.email, rules.maxLen(32)]"
          required
        >
        </v-text-field>
        <v-text-field
          v-model="password"
          prepend-icon="lock"
          name="password"
          label="Password"
          type="password"
          :counter="32"
          :rules="[rules.password, rules.minLen(6), rules.maxLen(32)]"
          required
        >
        </v-text-field>
      </v-form>

      <router-link to="/signup">sign up now!</router-link>
    </v-card-text>
    <v-card-actions>
      <v-btn flat @click="$refs.form.reset()">
        Clear
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="blue-grey lighten-4"
        :loading="isLoading"
        :disabled="!valid || isLoading"
        @click="signIn"
      >
        Sign In
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import validate from "@/validate.js";

export default {
  name: "SignInForm",
  data: () => ({
    email: "",
    password: "",
    valid: false,
    isLoading: false,
    rules: validate.rules
  }),
  methods: {
    signIn: async function() {
      this.isLoading = true;
      await this.$store
        .dispatch("signIn", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("/");
        });
      this.isLoading = false;
    }
  }
};
</script>
