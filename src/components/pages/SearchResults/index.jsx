import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../network/axiosInstance2";
import MovieCard from "../MovieCard";

const SearchResults = () => {
  const [movies, setMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    axiosInstance
      .get(`?api_key=e4eae07d4bf75ff5e8bf23242303106a&query=${params.search}`)
      .then((res) => {
        setMovie(res.data.results);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row  mt-40">
          {movies.map((movie) => (
            <div key={movie.id} className=" col-md-4 col-sm-6 my-4">
              <MovieCard item={movie} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default SearchResults;
