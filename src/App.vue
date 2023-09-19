<script>
import axios from "axios";

import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import CardList from "./components/CardList.vue";
import CardItems from "./components/CardItems.vue";

export default {
  components: {
    AppHeader,
    CardList,
    CardItems,
  },

  // star data
  data() {
    return {
      store,
    };
  },

  // start methods
  methods: {
    getCards() {
      // Movie
      let searchUrlMovie = store.apiUrlMovie + store.titleSearched;

      axios.get(searchUrlMovie).then((ref) => {
        store.movieList = ref.data.results;
        // cancat array movie end tv
        store.cardList = store.tvList.concat(store.movieList);
        // console.log(store.cardList);
      });
      // serieTv
      let searchUrlTv = store.apiUrlTv + store.titleSearched;
      axios.get(searchUrlTv).then((ref) => {
        store.tvList = ref.data.results;
        // console.log(store.tvList);
        // cancat array movie end tv
        store.cardList = store.movieList.concat(store.tvList);
        // console.log(store.cardList);
      });
    },
  },
  created() {
    this.getCards();
  },
};
</script>

<template>
  <AppHeader @search="getCards" />
  <main>
    <CardList />
  </main>
</template>

<style lang="scss">
@use "./styles/generals.scss" as *;

main {
  margin: 20px;
}
</style>
