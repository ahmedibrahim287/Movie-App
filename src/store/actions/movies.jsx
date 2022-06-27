import axiosInstance from "../../network/axiosInstance";

const getMoviesList = (params) => (dispatch) => {
  return axiosInstance
    .get("popular?api_key=e4eae07d4bf75ff5e8bf23242303106a", { params })
    .then((res) =>
      dispatch({
        type: "GET_MOVIES_LIST",
        payload: res.data.results,
      }),
    )
    .catch((error) => console.log(error));
};

export default getMoviesList;
// https://api.themoviedb.org/3/movie/popular?api_key=e4eae07d4bf75ff5e8bf23242303106a&language=ar
