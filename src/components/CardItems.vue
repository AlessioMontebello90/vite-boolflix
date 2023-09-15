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
    <!-- title -->
    <div>
      {{ details.title }}
    </div>

    <!-- original title -->
    <div>
      {{ details.original_title }}
    </div>

    <!-- language -->
    <div class="language">
      <img
        :src="`./../../public/language/${details.original_language}.jpg`"
        :alt="details.original_language"
      />
    </div>

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
