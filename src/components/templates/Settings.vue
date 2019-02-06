<template>
  <v-container grid-list-lg>
    <v-form ref="form" v-model="valid">
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
    <v-btn
      color="blue-grey lighten-4"
      :loading="isLoading"
      :disabled="!valid || isLoading"
      @click="updateUser"
    >
      Update
    </v-btn>
  </v-container>
</template>

<script>
import validate from "@/validate.js";
import userService from "@/api/user";

export default {
  name: "Settings",
  data: () => ({
    rules: validate.rules,
    valid: false,
    isLoading: false,
    name: "",
    sex: 0,
    age: -1
  }),
  created: function() {
    this.fetchUser();
  },
  methods: {
    fetchUser: async function() {
      await userService
        .get(this.$store.state.auth.uid)
        .then(res => {
          this.name = res.data.name;
          this.sex = res.data.sex;
          this.age = res.data.age;
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateUser: async function() {
      this.isLoading = true;
      const params = {
        name: this.name,
        sex: this.sex,
        age: this.age
      };
      await userService
        .put(params, this.$store.state.auth.token)
        .then(() => {
          this.$router.push({ name: "mypage" });
        })
        .catch(err => {
          console.log(err);
        });
      this.isLoading = false;
    }
  }
};
</script>
