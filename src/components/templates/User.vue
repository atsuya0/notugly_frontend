<template>
  <v-container grid-list-lg>
    <v-layout column>
      <profile />
      <coordinates :coordinates="coordinates" />
      <v-btn color="primary" fab fixed right bottom @click="dialog = true"
        ><v-icon>add</v-icon></v-btn
      >
      <post-coordinate-dialog
        :dialog="dialog"
        @postCoordinate="postCoordinate"
        @close="dialog = false"
      />
    </v-layout>
  </v-container>
</template>

<script>
import Profile from "@/components/organisms/Profile.vue";
import Coordinates from "@/components/organisms/Coordinates.vue";
import PostCoordinateDialog from "@/components/organisms/PostCoordinateDialog.vue";
import datetime from "@/mixins/Datetime";
import coordinateService from "@/api/coordinate";

export default {
  name: "User",
  components: {
    Profile,
    Coordinates,
    PostCoordinateDialog
  },
  mixins: [datetime],
  data: () => ({
    coordinates: [],
    dialog: false
  }),
  created: function() {
    this.fetchCoordinates();
  },
  methods: {
    fetchCoordinates: async function() {
      await coordinateService
        .getByUserId(this.$store.state.auth.uid)
        .then(res => {
          this.coordinates = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    postCoordinate: async function(imageURI) {
      const encodedImage = imageURI.substr(imageURI.indexOf(",") + 1);
      const params = {
        image: encodedImage,
        createdAt: this.getDatetime()
      };
      await coordinateService
        .post(params, this.$store.state.auth.token)
        .then(res => {
          this.coordinates = [
            ...this.coordinates,
            Object.assign({
              id: res.data.id,
              imageName: res.data.imageName,
              createdAt: params.createdAt,
              favorites: 0
            })
          ];
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
