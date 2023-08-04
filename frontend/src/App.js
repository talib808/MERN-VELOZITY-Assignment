import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  setSearchResults,
} from "./store/actions";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import Pagination from "./components/Pagination";
import FavoritesPage from "./components/FavoritesPage";
import "./App.css";

const App = () => {
  const searchResults = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/movies/search?query=${query}`
      );
      dispatch(setSearchResults(response.data));
      // console.log(response.data)
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  const toggleFavorite = (movie) => {
    if (searchResults.some((fav) => fav.imdbID === movie.imdbID)) {
      dispatch(removeFromFavorites(movie.imdbID));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;
  const totalPages = Math.ceil(searchResults.length / moviesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedMovies = searchResults.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <SearchPage
                searchMovies={searchMovies}
                displayedMovies={displayedMovies}
                toggleFavorite={toggleFavorite}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            }
          />
            <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const SearchPage = ({
  searchMovies,
  displayedMovies,
  toggleFavorite,
  currentPage,
  totalPages,
  onPageChange,
}) => (
  <>
    <header>
      <div className="favorites-sidebar">
        <h1 className="page-title">Movie Search and Favorites</h1>
        <Link to="/favorites" className="favorites-button ">
          <span role="img" aria-label="Favorites">
            ❤️
          </span>
        </Link>
      </div>
    </header>

    <SearchBar onSearch={searchMovies} />
    <div className="movie-grid">
      {displayedMovies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  </>
);

export default App;


