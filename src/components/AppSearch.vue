<script>
import { store } from "./../store";
export default {
  name: "AppSearch",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <input type="text" v-model="store.titleSearched" />
  <button type="submit">Search</button>
</template>

<style lang="scss" scoped></style>
