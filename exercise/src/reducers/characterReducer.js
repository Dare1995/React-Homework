import {
  FETCH_CHARACTERS,
  FETCH_CHARACTER_DETAILS,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_SEARCH_RESULTS,
} from '../actions/characterActions';

const initialState = {
  characters: [],
  characterDetails: {},
  favorites: [],
  searchResults: [],
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, characters: action.payload };
    case FETCH_CHARACTER_DETAILS:
      return { ...state, characterDetails: action.payload };
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((char) => char.id !== action.payload),
      };
    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};

export default characterReducer;