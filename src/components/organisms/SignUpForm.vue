<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>
        Sign Up Form
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
        <v-text-field
          v-model="name"
          prepend-icon="account_box"
          name="name"
          label="Name"
          type="text"
          :counter="32"
          :rules="[rules.minLen(1), rules.maxLen(32)]"
          required
        >
        </v-text-field>
        <v-radio-group v-model="sex">
          <v-radio
            v-for="(item, index) in $store.state.sexList"
            :key="index"
            :label="item"
            :value="index"
          ></v-radio>
        </v-radio-group>
        <v-slider v-model="age" thumb-label label="age"></v-slider>
      </v-form>

      <router-link to="/signin">sign in now!</router-link>
    </v-card-text>
    <v-card-actions>
      <v-btn flat @click="$refs.form.reset()">
        Clear
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        :loading="isLoading"
        :disabled="!valid || isLoading"
        @click="signUp"
      >
        Sign Up
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import validate from "@/validate.js";

export default {
  name: "SignUpForm",
  data: () => ({
    email: "",
    password: "",
    name: "",
    sex: 0,
    age: 0,
    valid: false,
    isLoading: false,
    rules: validate.rules
  }),
  methods: {
    signUp: async function() {
      this.isLoading = true;
      await this.$store
        .dispatch("signUp", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$store.dispatch("createUser", {
            name: this.name,
            sex: this.sex,
            age: this.age
          });
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
      this.isLoading = false;
    }
  }
};
</script>
