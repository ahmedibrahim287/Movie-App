import React, { Fragment, useContext, useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import MyPagination from "../Pagination";
import { useDispatch, useSelector } from "react-redux";
import getMoviesList from "../../../store/actions/movies";
import LanguageContext from "../../../context/language";

const Movies = () => {
  const [tagList, setTagList] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();
  const { contextLang, setContextLang } = useContext(LanguageContext);

  const afterPageClicked = (page_number) => {
    setCurrPage(page_number);
  };

  useEffect(() => {
    dispatch(
      getMoviesList({
        page: currPage,
        language: contextLang,
      }),
    );
  }, [contextLang, currPage]);

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

      <MyPagination
        totPages={60}
        currentPage={currPage}
        pageClicked={(ele) => {
          afterPageClicked(ele);
        }}
      >
        <ul>
          {tagList.map((ele, ind) => (
            <li key={ele + ind}>{ele}</li>
          ))}
        </ul>
      </MyPagination>
    </Fragment>
  );
};

export default Movies;
