<template>
  <v-toolbar color="blue-grey lighten-4" app>
    <v-toolbar-title class="ml-0 pl-3">
      <router-link tag="div" to="{name: 'browse'}">
        <span class="hidden-xs-only">NOTUGLY</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <header-dropdown :menu="menu" v-if="!isSignPage()" />
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
  }),
  props: {
    path: {
      type: String,
      required: true
    }
  },
  methods: {
    isSignPage: function() {
      if (this.path === "/signup" || this.path === "/signin") {
        return true;
      }
      return false;
    }
  }
};
</script>
