<script>
export default {
  name: "reatingStars",
  props: ["vote", "pos"],
};
</script>

<template>
  <!-- {{ Math.ceil(vote / 2) }} -->
  <i
    :class="
      pos < Math.ceil(vote / 2) ? 'fa-solid fa-star' : 'fa-regular fa-star'
    "
  ></i>
  <!-- (  idx =< voto ) ? piena : vuota -->
  <!-- (  idx =< voto ) ? 'fa-solid fa-star' : 'fa-regular fa-star' -->
</template>

<style lang="scss" scoped></style>
