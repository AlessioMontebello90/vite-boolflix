import { reactive } from "vue";

export const store = reactive({
  // API URL
  apiUrlMovie:
    "https://api.themoviedb.org/3/search/movie?api_key=4354bdc1164accce56e509efe2a30375&language=it_IT&query=",
  apiUrlTv:
    "https://api.themoviedb.org/3/search/tv?api_key=4354bdc1164accce56e509efe2a30375&language=it_IT&query=",

  // variables to search
  titleSearched: "",
  movieList: [],
  tvList: [],
  cardList: [],
  thumbImg: "http://image.tmdb.org/t/p/original/",
});
