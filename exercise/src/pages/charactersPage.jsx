import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../actions/characterActions";
import CharacterCard from "../components/CharacterCard";
import "./charactersPage.css";

const CharactersPage = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.searchResults.length
    ? state.characters.searchResults
    : state.characters.characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div className="characters-page">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharactersPage;