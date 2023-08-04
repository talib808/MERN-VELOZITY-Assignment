import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/actions';
import "./MovieCard.css"

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie.imdbID));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <div className="movie-card">
      <Link >
      {/* to={`/movie/${movie.imdbID}`} */}
        <img src={movie.Poster} alt={movie.Title} />
      </Link>
      <div className="movie-details">
        <h3>{movie.Title}</h3>
        <p>Year: {movie.Year}</p>
      </div>
      <button
        className={`favorite-button ${isFavorite ? 'favorite' : ''}`}
        onClick={handleToggleFavorite}
      >
        <span role="img" aria-label="Favorite">
          {isFavorite ? '❤️' : '🤍'}
        </span>
      </button>
    </div>
  );
};

export default MovieCard;




