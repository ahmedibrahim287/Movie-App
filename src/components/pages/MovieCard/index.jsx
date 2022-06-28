import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MoiveCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../../store/slices/FavouritesSlice";

const MovieCard = ({ item }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const dispatch = useDispatch();
  const favouriteList = useSelector(
    (state) => state.favouriteList.favouriteList,
  );

  useEffect(() => {
    let isMovieInFavourite = favouriteList.findIndex(
      (movie) => movie.id === item.id,
    );
    if (isMovieInFavourite === -1) {
      setIsFavourite(false);
    } else {
      setIsFavourite(true);
    }
  }, [favouriteList]);

  return (
    <Fragment>
      <div className="d-flex flex-column ">
        <div className={styles.box1}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
          />
          <h3 className={styles.title}>{`${item.overview.substring(
            0,
            90,
          )}...`}</h3>
          <ul className={styles.icon}>
            <li>
              {isFavourite ? (
                <Link
                  to="#"
                  onClick={() => dispatch(removeFromFavourites(item.id))}
                >
                  <i
                    className="fa-solid fa-heart"
                    style={{ color: "#eb8a73" }}
                  ></i>
                </Link>
              ) : (
                <Link to="#" onClick={() => dispatch(addToFavourites(item))}>
                  <i
                    className="fa-thin fa-heart"
                    style={{ color: "#eb8a73" }}
                  ></i>
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="card-body text-center mt-4" style={{ color: "#fff" }}>
          <h5 className="card-title">{`${item.title}`}</h5>
          <p className="card-text text-capitalize">
            rate : {item.vote_average}
            <i
              className="fa-solid fa-star ms-3"
              style={{ color: "#ffb100", fontSize: "20px" }}
            ></i>
          </p>
          <Link
            to={`/movie-details/${item.id}`}
            className="btn btn-outline-secondary "
          >
            More Details{" "}
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieCard;
