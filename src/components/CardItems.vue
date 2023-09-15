<script>
export default {
  name: "CardItems",
  props: {
    details: Object,
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

    <!-- lenguage -->
    <div>
      <img src="path.jpg" :alt="details.original_language" />
    </div>

    <!-- vote -->
    <div>
      {{ details.vote_average }}
    </div>
  </li>
</template>

<style lang="scss" scoped></style>
