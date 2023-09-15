<script>
import AppSearch from "./AppSearch.vue";
export default {
  name: "AppHeader",
  components: { AppSearch },
};
</script>

<template>
  <header>
    <h1>BoolFlix</h1>
    <div>
      <AppSearch />
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
