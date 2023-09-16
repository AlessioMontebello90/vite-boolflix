<script>
import AppSearch from "./AppSearch.vue";
import { store } from "./../store";
export default {
  name: "AppHeader",
  components: {
    AppSearch,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <header>
    <h1>BoolFlix</h1>
    <div id="search">
      <input
        type="text"
        v-model="store.titleSearched"
        @keyup.enter="$emit('search')"
      />
      <button type="submit" @click.prevent="$emit('search')">cerca</button>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: red;
  height: 100px;
  padding: 10px;
}
</style>
