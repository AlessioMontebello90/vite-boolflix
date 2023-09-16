<script>
import axios from "axios";
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import CardList from "./components/cardList.vue";
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
    // getInfoMovie() {
    // },
    // getInfoTv() {
    // },
    getCards() {
      // this.getInfoMovie();
      // this.getInfoTv();
      // Movie
      let searchUrlMovie = store.apiUrlMovie + store.titleSearched;
      axios.get(searchUrlMovie).then((ref) => {
        store.movieList = ref.data.results;
        console.log(store.movieList);
        // serieTv
        let searchUrlTv = store.apiUrlTv + store.titleSearched;
        axios.get(searchUrlTv).then((ref) => {
          store.tvList = ref.data.results;
          console.log(store.tvList);
          // unisco i due array
          store.cardList = store.movieList.concat(store.tvList);
          console.log(store.cardList);
        });
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
