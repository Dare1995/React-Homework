import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCharacters } from "../actions/characterActions";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.characters.favorites);
  const favoritesCount = favorites.length;

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchCharacters(searchTerm));
  };

  return (
    <nav className="navbar">
      <h1 className="navbar_title">Rick and Morty Characters</h1>
      <div className="navbar_links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites ({favoritesCount})</Link>
      </div>
      <form onSubmit={handleSearch} className="navbar_search">
        <input
          type="text"
          placeholder="Search Characters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="navbar_input"
        />
        <button type="submit" className="navbar_button">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;