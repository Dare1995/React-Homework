import axios from "axios";

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_CHARACTER_DETAILS = "FETCH_CHARACTER_DETAILS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

const API_URL = 'https://rickandmortyapi.com/api/character/';

export const fetchCharacters = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: FETCH_CHARACTERS, payload: response.data.results });
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
};

export const fetchCharacterDetails = (id) => async (dispatch) => {
  const response = await axios.get(`${API_URL}${id}`);
  dispatch({ type: FETCH_CHARACTER_DETAILS, payload: response.data });
};

export const addToFavorites = (character) => (dispatch) => {
  dispatch({ type: ADD_TO_FAVORITES, payload: character });
};

export const removeFromFavorites = (id) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_FAVORITES, payload: id });
};

export const searchCharacters = (name) => async (dispatch) => {
  const response = await axios.get(`${API_URL}?name=${name}`);
  dispatch({ type: SET_SEARCH_RESULTS, payload: response.data.results });
};