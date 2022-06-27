import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});
export default axiosInstance;
