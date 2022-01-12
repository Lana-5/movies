import axios from "axios";

const jsonPlaceholderInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default jsonPlaceholderInstance;
