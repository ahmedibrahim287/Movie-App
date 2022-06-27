import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axiosInstance from "../../../network/axiosInstance";

const MovieDetails = () => {
  const [state, setState] = useState([]);
  const params = useParams();

  useEffect(() => {
    axiosInstance
      .get(`${params.id}?api_key=e4eae07d4bf75ff5e8bf23242303106a`)
      .then((res) => setState(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="card bg-dark text-white">
          <img
            src={`https://image.tmdb.org/t/p/w500${state.backdrop_path}`}
            className="card-img"
            style={{ height: "93vh" }}
            alt={state.title}
          />
          <div className="card-img-overlay">
            <div
              className="card mb-3 border-0"
              style={{
                marginTop: "80px",
                backgroundColor: "#ffffffa8",
                maxWidth: "100%",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${state.poster_path}`}
                    className="img-fluid rounded-start"
                    alt={state.title}
                  />
                </div>
                <div
                  className="col-md-8"
                  style={{ marginTop: "10%", padding: "50px" }}
                >
                  <div
                    className="card-body text-capitalize"
                    style={{
                      color: "#000",
                      textAlign: "center",
                      fontSize: "20px",
                    }}
                  >
                    <h5 className="card-title" style={{ fontSize: "35px" }}>
                      {state.title}
                    </h5>
                    <p className="card-text">{state.overview}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        rate : {state.vote_average}{" "}
                        <i
                          className="fa-solid fa-star ms-3"
                          style={{ color: "#ffb100", fontSize: "20px" }}
                        ></i>
                      </small>
                    </p>
                  </div>
                  <div className="d-flex justify-content-end text-capitalize">
                    <Link
                      to={`/movies`}
                      className="btn btn-dark me-3 d-flex justify-content-center align-items-center"
                    >
                      <i className="fa-solid fa-circle-caret-left me-1"></i>
                      Back to all movies
                    </Link>
                    <Link
                      to={`/movies`}
                      className="btn btn-dark me-3 d-flex justify-content-center align-items-center"
                    >
                      download movie
                      <i className="fa-solid fa-download ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieDetails;
