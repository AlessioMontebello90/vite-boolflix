<script>
import { store } from "./../store";
export default {
  name: "CardList",
  data() {
    return { store };
  },
};
</script>

<template>
  <ul>
    <li v-for="card in store.cardList">
      {{ card.title }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
