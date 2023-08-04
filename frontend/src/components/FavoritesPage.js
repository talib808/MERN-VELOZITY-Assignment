import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./MovieCard.css"

const FavoritesPage = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    fetchFavoriteMovies();
  }, []);

  const fetchFavoriteMovies = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/movies/favorites'); 
      setFavoriteMovies(response.data);
    } catch (error) {
      console.error('Error fetching favorite movies:', error);
    }
  };

  return (
    <div className="favorites-sidebar">
      <h1 className="page-title">Movie Search and Favorites</h1>
      <div className="favorites">
        <h2>Favorites</h2>
        <ul>
          {favoriteMovies.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <div>
                <h3>{movie.Title}</h3>
                <p>Year: {movie.Year}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FavoritesPage;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const FavoritesPage = () => {
//   const [favoriteMovies, setFavoriteMovies] = useState([]);

//   useEffect(() => {
//     fetchFavoriteMovies();
//   }, []);

//   const fetchFavoriteMovies = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/movies/favorites');
//       setFavoriteMovies(response.data);
//       console.log(response.data)
//     } catch (error) {
//       console.error('Error fetching favorite movies:', error);
//     }
//   };

//   return (
//     <div className="favorites-sidebar">
//       <h1 className="page-title">Movie Search and Favorites</h1>
//       <div className="favorites">
//         <h2>Favorites</h2>
//         <ul>
//           {favoriteMovies.map((imdbID) => (
//             <li key={imdbID}>{imdbID}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;
