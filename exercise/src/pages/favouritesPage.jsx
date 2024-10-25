import React from "react";
import { useSelector } from "react-redux";
import CharacterCard from "../components/CharacterCard";
import "./favouritesPage.css";

const FavoritesPage = () => {
  const favorites = useSelector(state => state.characters.favorites);

  return (
    <div className="favorites-page">
      <h1>Favorites</h1>
      <div className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;