import React, { useState, useEffect } from "react";
import CountryCard from "../../components/CountryCard/countryCard";
import "./home.css";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [countrySearch, setcountrySearch] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const filterCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(countrySearch.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>Country List</h1>
      <input
        type="text"
        placeholder="Search countries..."
        value={countrySearch}
        onChange={(e) => setcountrySearch(e.target.value)}
        className="search-input"
      />
      <div className="country-list">
        {filterCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;