import axios from "axios";

const moviedbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

moviedbInstance.interceptors.request.use((config) => {
  // перехват запроса
  config.params = {
    api_key: "b3b2808173dccf7a658ad31dd4253d93",
    language: "ru-RU",
  };
  return config;
});

export default moviedbInstance;
