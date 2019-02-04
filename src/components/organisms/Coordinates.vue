<template>
  <v-layout justify-space-around align-baseline wrap>
    <v-flex v-for="coordinate in coordinates" :key="coordinate.id">
      <v-card hover>
        <v-img
          :src="coordinate.imageName | toUrl"
          contain
          min-width="200"
        ></v-img>
        <v-card-actions>
          <v-container>
            <div class="grey--text">{{ coordinate.createdAt }}</div>
            <v-layout justify-center>
              <v-icon class="ma-1">thumb_up</v-icon>
              <span class="subheading ma-1">{{ coordinate.favorites }}</span>
            </v-layout>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Coordinates",
  props: {
    coordinates: {
      type: Array,
      required: true
    }
  },
  filters: {
    toUrl: function(name) {
      return `http://localhost:9000/images/${name}`;
    }
  }
};
</script>
