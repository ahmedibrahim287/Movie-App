import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "hover.css";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/pages/MovieDetails";
import SearchResults from "./components/pages/SearchResults";
import LanguageContext from "./context/language";
import Favourites from "./components/pages/favourite";

import { useState } from "react";
function App() {
  const [contextLang, setContextLang] = useState("en");
  return (
    <>
      <Router>
        <LanguageContext.Provider value={{ contextLang, setContextLang }}>
          <Navbar />
          <Routes>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/movies" index element={<Movies />}></Route>
            <Route
              path={"/movie-details/:id"}
              element={<MovieDetails />}
            ></Route>
            <Route
              path={"/search-results/:search"}
              element={<SearchResults />}
            ></Route>
            <Route path="/favourites" element={<Favourites />} />

            <Route path={"*"} element={<NotFound />}></Route>
          </Routes>
        </LanguageContext.Provider>
      </Router>
    </>
  );
}

export default App;
