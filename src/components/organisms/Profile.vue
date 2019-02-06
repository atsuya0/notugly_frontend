<template>
  <v-container fluid>
    <v-card flat>
      <v-layout column align-center>
        <v-tooltip top>
          <v-card-title class="headline" slot="activator">
            {{ name }}
          </v-card-title>
          <span>{{ id }}</span>
        </v-tooltip>
        <v-card-actions>
          <span class="mx-2 grey--text">{{ $store.state.sexList[sex] }}</span>
          <span>/</span>
          <span class="mx-2 grey--text">{{ age }} years old</span>
          <v-btn color="blue-grey lighten-2" outline icon href="/settings">
            <v-icon>edit</v-icon>
          </v-btn>
        </v-card-actions>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import userService from "@/api/user";

export default {
  name: "Profile",
  data: () => ({
    id: "",
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
          this.id = res.data.id;
          this.name = res.data.name;
          this.sex = res.data.sex;
          this.age = res.data.age;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
