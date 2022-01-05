import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

instance.interceptors.request.use((config) => {
  config.params = {
    api_key: "b3b2808173dccf7a658ad31dd4253d93",
    language: "ru-RU",
  };
  return config;
});

export default instance;
