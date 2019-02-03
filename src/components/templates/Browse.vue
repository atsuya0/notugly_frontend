<template>
  <v-container grid-list-lg>
    <v-layout row align-center>
      <v-btn
        icon
        large
        outline
        :color="this.isFavorited ? 'blue' : 'grey'"
        :loading="isLoading"
        :disabled="isLoading || contributorId === uid"
        @click="toggleFavorite"
      >
        <v-icon>thumb_up</v-icon>
      </v-btn>
      <v-img :src="imageSrc" contain max-height="500"></v-img>
      <v-btn
        icon
        large
        outline
        color="grey"
        :loading="isLoading"
        :disabled="isLoading"
        @click="fetchCoordinate"
      >
        <v-icon>autorenew</v-icon>
      </v-btn>
    </v-layout>
    <div class="grey--text">投稿時刻 {{ createdAt }}</div>
  </v-container>
</template>

<script>
import coordinateService from "@/api/coordinate";
import favoriteService from "@/api/favorite";

export default {
  name: "Browse",
  data: () => ({
    id: -1,
    imageName: "",
    contributorId: "",
    createdAt: "",
    isFavorited: false,
    isLoading: false,
    uid: ""
  }),
  created: function() {
    this.uid = this.$store.state.auth.uid;
    this.fetchCoordinate();
  },
  computed: {
    imageSrc: function() {
      if (this.imageName !== "") {
        return `http://localhost:9000/images/${this.imageName}`;
      }
      return "";
    }
  },
  methods: {
    fetchCoordinate: async function() {
      this.isLoading = true;
      const res = await coordinateService
        .getAtRandom(this.$store.state.auth.token)
        .catch(err => {
          console.log(err);
        });
      this.id = res.data.id;
      this.imageName = res.data.imageName;
      this.contributorId = res.data.userId;
      this.createdAt = res.data.createdAt;
      this.isFavorited = res.data.isFavorited;
      this.isLoading = false;
    },
    favorite: async function(params) {
      favoriteService
        .post(params, this.$store.state.auth.token)
        .then(() => {
          this.isFavorited = true;
        })
        .catch(err => {
          throw err;
        });
    },
    cancelFavorite: async function(params) {
      favoriteService
        .delete(params, this.$store.state.auth.token)
        .then(() => {
          this.isFavorited = false;
        })
        .catch(err => {
          throw err;
        });
    },
    toggleFavorite: async function() {
      this.isLoading = true;
      const params = { coordinateId: this.id };
      if (this.isFavorited) {
        this.cancelFavorite(params).catch(err => {
          console.log(err);
        });
      } else {
        this.favorite(params).catch(err => {
          console.log(err);
        });
      }
      this.isLoading = false;
    }
  }
};
</script>
