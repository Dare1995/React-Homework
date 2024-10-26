import React from "react";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../actions/characterActions";
import "./CharacterCard.css";
import { Link } from "react-router-dom";

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
      <Link to={`/character/${character.id}`} className="character-card_link">More Details</Link>
    </div>
  );
};

export default CharacterCard;