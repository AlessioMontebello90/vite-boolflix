<script>
import { store } from "./../store";
import CardItems from "./CardItems.vue";
export default {
  name: "CardList",
  components: {
    CardItems,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h1>
    find <span>{{ store.cardList.length }}</span>
  </h1>
  <ul>
    <CardItems
      v-for="(card, idx) in store.cardList"
      :key="idx"
      :details="card"
    />
  </ul>
  /template>

  <style lang="scss" scoped>
    @use "./../styles/generals.scss" as *;
    li {
      border: 1px solid black;
    }
  </style>
</template>
