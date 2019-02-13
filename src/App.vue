<template>
  <div id="app">
    <v-app id="inspire">
      <Header />
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from "@/components/organisms/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
