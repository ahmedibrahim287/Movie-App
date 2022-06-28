import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavourites } from "../../../store/slices/FavouritesSlice";
import styles from "./fav.module.css";

function Favourites(props) {
  const dispatch = useDispatch();
  const favouriteList = useSelector(
    (state) => state.favouriteList.favouriteList,
  );

  return (
    <>
      <section className="" style={{ color: "white" }}>
        <h1 className="text-3xl mx-auto text-center md:text-5xl font-bold my-5">
          Favourites
        </h1>
        {favouriteList.length !== 0 ? (
          <div className="container">
            <div className="row  mt-40">
              {favouriteList.map((movie) => (
                <div key={movie.id} className=" col-md-4 col-sm-6 my-4">
                  <div className="d-flex flex-column ">
                    <div className={styles.box1}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                      />
                      <h3 className={styles.title}>{`${movie.overview}`}</h3>
                      <ul className={styles.icon}>
                        <li>
                          {movie.favourite && (
                            <Link
                              to="#"
                              onClick={() =>
                                dispatch(removeFromFavourites(movie.id))
                              }
                            >
                              <i
                                className="fa-solid fa-heart"
                                style={{ color: "#eb8a73" }}
                              ></i>
                            </Link>
                          )}
                        </li>
                      </ul>
                    </div>
                    <div
                      className="card-body text-center mt-4"
                      style={{ color: "#fff" }}
                    >
                      <h5 className="card-title">{`${movie.title}`}</h5>
                      <p className="card-text text-capitalize">
                        rate : {movie.vote_average}
                        <i
                          className="fa-solid fa-star ms-3"
                          style={{ color: "#ffb100", fontSize: "20px" }}
                        ></i>
                      </p>
                      <Link
                        to={`/movie-details/${movie.id}`}
                        className="btn btn-outline-secondary "
                      >
                        More Details{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* {favouriteList.map((movie) => (
                  <tr className="hover" key={movie.title}>
                    <th>{movie.id}</th>
                    <td>{movie.title}</td>
                    <td>{movie.release_date}</td>
                    <td>{movie.vote_average}/10</td>
                    <td className="flex flex-col md:flex-row items-center justify-center md:space-x-5 space-y-2">
                      <Link
                        className="btn btn-primary"
                        to={`/movie/${movie.id}`}
                      >
                        Details
                      </Link>

                      {movie.favourite && (
                        <HeartIcon
                          className="w-8 h-8 text-red-500 hover:cursor-pointer"
                          onClick={() =>
                            dispatch(removeFromFavourites(movie.id))
                          }
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
        ) : (
          <h1 className="text-3xl mx-auto text-center md:text-5xl font-bold my-5 text-red-500">
            There is no items in your favourites right now!
          </h1>
        )}
      </section>
    </>
  );
}

export default Favourites;
