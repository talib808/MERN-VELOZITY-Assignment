export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (imdbID) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: imdbID,
});


export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});