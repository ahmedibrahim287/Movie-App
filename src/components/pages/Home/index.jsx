import React, { Fragment } from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div
        className="d-flex flex-column w-100 ms-auto "
        style={{ marginTop: "200px" }}
      >
        <h1 className="heading ">welcome to movie aparafasdfp</h1>
        <Link
          to="/movies"
          className="btn btn-outline-secondary w-25 m-auto text-capitalize"
        >
          go to movies{" "}
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
