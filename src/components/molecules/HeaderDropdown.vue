<template>
  <v-menu offset-y left transition="slide-y-transition">
    <v-btn icon slot="activator">
      <v-icon>more_vert</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile v-for="(item, index) in menu" :key="index">
        <v-list-tile-title>
          <router-link tag="div" :to="{ name: item.link }">
            {{ item.title }}
          </router-link>
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "HeaderDropdown",
  props: {
    menu: {
      type: Array,
      required: true
    }
  }
};
</script>
