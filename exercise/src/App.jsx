import React from "react";
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
import CharactersPage from "./pages/charactersPage";
import CharacterDetailsPage from "./pages/characterDetailsPage";
import FavoritesPage from "./pages/favouritesPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;