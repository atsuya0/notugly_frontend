<template
  ><div></div
></template>

<script>
export default {
  name: "SignOut",
  created: function() {
    this.$store.dispatch("signOut");
    this.$router.push("{ name: 'signin' }");
  }
};
</script>
