import { reactive } from "vue";

export const store = reactive({
  apiUrlMovie:
    "https://api.themoviedb.org/3/search/movie?api_key=4354bdc1164accce56e509efe2a30375&query=",
  apiUrlTv:
    "https://api.themoviedb.org/3/search/tv?api_key=4354bdc1164accce56e509efe2a30375&query=",
  myApiKey: "4354bdc1164accce56e509efe2a30375",
  titleSearched: "ritorno+al+futuro",
  cardList: [],
});
