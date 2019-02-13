<template>
  <v-toolbar color="blue-grey lighten-4" app>
    <v-toolbar-title class="ml-0 pl-3">
      <router-link tag="div" to="{name: 'browse'}">
        <span class="hidden-xs-only">NOTUGLY</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <header-dropdown :menu="menu" v-if="$route.meta.requiresAuth" />
  </v-toolbar>
</template>

<script>
import HeaderDropdown from "@/components/molecules/HeaderDropdown.vue";

export default {
  name: "Header",
  components: {
    HeaderDropdown
  },
  data: () => ({
    menu: [
      { title: "マイページ", link: "mypage" },
      { title: "サインアウト", link: "signout" }
    ]
  })
};
</script>
