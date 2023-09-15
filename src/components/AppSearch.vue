<script>
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
  <button type="submit" @click.prevent="$emit('search')">cerca</button>
</template>

<style lang="scss" scoped></style>
