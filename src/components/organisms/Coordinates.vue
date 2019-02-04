<template>
  <v-layout justify-space-around align-baseline wrap>
    <v-card
      v-for="(coordinate, index) in coordinates"
      :id="coordinate.id"
      :key="index"
      flat
      hover
    >
      <v-img
        :src="coordinate.imageName | toUrl"
        contain
        min-width="200"
      ></v-img>
      <v-card-actions>
        <v-container>
          <div class="grey--text">{{ coordinate.createdAt }}</div>
          <v-layout justify-center>
            <v-icon class="mr-1">thumb_up</v-icon>
            <span class="subheading mr-1">{{ coordinate.favorites }}</span>
          </v-layout>
        </v-container>
      </v-card-actions>
    </v-card>
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
