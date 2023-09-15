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
    getInfoMovie() {
      let searchUrlMovie = store.apiUrlMovie + store.titleSearched;
      // if (store.titleSearched != 0) {
      //   searchUrlMovie += store.titleSearched;
      // }
      axios.get(searchUrlMovie).then((ref) => {
        store.cardList = ref.data.results;
        console.log(store.cardList);
      });
    },
    // getInfoTv() {
    //   let searchUrlTv = store.apiUrlTv + store.titleSearched;
    //   axios.get(searchUrlTv)
    //     .then(ref => {
    //       store.cardList.concat(ref.data.results);
    //       console.log(store.cardList);
    //     }
    //     )
    // },
    getCards() {
      this.getInfoMovie();
      // this.getInfoTv();
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
