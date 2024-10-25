import React from "react";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../actions/characterActions";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(character));
  };

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} className="character-card_image" />
      <h3 className="character-card_name">{character.name}</h3>
      <p>Status: {character.status}</p>
      <button className="character-card_button" onClick={handleAddToFavorites}>Add to Favorites</button>
      <button className="character-card_button">More Details</button>
    </div>
  );
};

export default CharacterCard;