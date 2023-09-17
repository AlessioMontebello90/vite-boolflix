<script>
import { store } from "./../store";
import ratingsStars from "./ratingsStars.vue";

export default {
  name: "CardItems",
  components: {
    ratingsStars,
  },
  props: {
    details: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <li class="card">
    <div class="immage_card">
      <img
        :src="`${store.thumbImg}${details.backdrop_path}`"
        :alt="`motion picture ${details.title}${details.name}`"
      />
    </div>

    <!-- v-if="(store.movieList.includes(details))" -->
    <div class="text_card">
      <div v-if="store.movieList.includes(details)">
        <!-- title -->
        <div><strong>Titolo: </strong> {{ details.title }}</div>

        <!-- original title -->
        <div>
          <strong>Titolo Originale: </strong>{{ details.original_title }}
        </div>
      </div>

      <div v-else-if="store.tvList.includes(details)">
        <!-- name -->
        <div><strong>Nome: </strong>{{ details.name }}</div>

        <!-- original name -->
        <div><strong>Nome Originale: </strong>{{ details.original_name }}</div>
      </div>

      <!-- language -->

      <span>
        <strong>Lingua: </strong>
      </span>
      <div class="language">
        <img
          :src="`language/${details.original_language}.jpg`"
          :alt="`${details.original_language} language`"
        />
      </div>

      <!-- vote -->
      <div class="ratings">
        <strong>Voto: </strong>
        <ratingsStars
          v-for="(n, idx) in 5"
          :vote="details.vote_average"
          :pos="idx"
        />
      </div>

      <div>
        <strong>overview: </strong>
        {{ details.overview }}
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.card {
  width: calc((100% / 4) - 10px);
  height: 400px;
  background-color: #000;

  .immage_card {
    .title {
      color: #ffd500;
    }

    display: block;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .text_card {
    display: none;
  }
}

.card:hover {
  .immage_card {
    display: none;
  }

  .text_card {
    display: block;
    width: 100%;
    height: 100%;
    padding: 30px;
    color: #fff;
    border: 1px solid #fff;

    div {
      margin-bottom: 10px;
    }
  }
}

.language {
  width: 50px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
  }
}

.hidden {
  display: none;
}

.active {
  display: block;
}
</style>
