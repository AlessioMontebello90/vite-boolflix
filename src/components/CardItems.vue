<script>
import { store } from "./../store";
export default {
  name: "CardItems",
  props: {
    details: Object,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    flagBuild() {},
  },
};
</script>

<template>
  <li>
    <div v-if="store.movieList.includes(details)">
      <!-- title -->
      <div>
        {{ details.title }}
      </div>

      <!-- original title -->
      <div>
        {{ details.original_title }}
      </div>
    </div>
    <div v-else-if="store.tvList.includes(details)">
      <!-- name -->
      <div>
        {{ details.name }}
      </div>

      <!-- original name -->
      <div>
        {{ details.original_name }}
      </div>
    </div>

    <!-- language -->

    <div class="language">
      <img
        :src="`./../../public/language/${details.original_language}.jpg`"
        :alt="details.original_language"
      />
    </div>
    <!-- ${details.original_language} -->
    <!-- vote -->
    <div>
      {{ details.vote_average }}
    </div>
  </li>
</template>

<style lang="scss" scoped>
.language {
  width: 50px;
  height: 30px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
