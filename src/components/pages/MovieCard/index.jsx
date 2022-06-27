import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./MoiveCard.module.css";

const MovieCard = ({ item }) => {
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
              <Link to="#">
                <i className="fa-duotone fa-circle-heart"></i>{" "}
              </Link>
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
