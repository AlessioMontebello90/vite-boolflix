<script>
import axios from "axios";
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import AppSearch from "./components/AppSearch.vue";
import CardList from "./components/cardList.vue";

export default {
  components: {
    AppHeader,
    CardList,
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
      let searchUrl = store.apiUrlMovie + store.titleSearched;
      axios.get(searchUrl).then((ref) => {
        store.cardList = ref.data.results;
        console.log(store.cardList);
      });
    },
  },
  created() {
    this.getInfoMovie();
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <CardList />
  </main>
</template>

<style lang="scss"></style>
