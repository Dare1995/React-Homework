import React from "react";
import { Link } from "react-router-dom";
import "./countryCard.css";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <img className="country-flag" src={country.flags.png} alt={`${country.name.common} flag`}/>
      <h2>{country.name.common}</h2>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
      <Link className="details-link" to={`/country/${country.name.common}`}>
        Details
      </Link>
    </div>
  );
};

export default CountryCard;