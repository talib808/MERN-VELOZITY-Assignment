import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES,SET_SEARCH_RESULTS } from './actions';

const initialState = {
  favorites: [],
  searchResults: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };

      case SET_SEARCH_RESULTS: 
      return {
        ...state,
        searchResults: action.payload,
      };

    default:
      return state;
  }

};

export default reducer;
