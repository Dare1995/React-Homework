import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./countryDetail.css";

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((data) => setCountry(data[0]))
      .catch((error) => console.error("Error fetching country details:", error));
  }, [name]);

  if (!country) return <p>Loading...</p>;

  return (
    <div className="country-detail">
      <img className="detail-flag" src={country.flags.png} alt={`${country.name.common} flag`} />
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Currency: {Object.keys(country.currencies).join(", ")}</p>
      <p>Continent: {country.region}</p>
      <p>Languages: {Object.values(country.languages).join(", ")}</p>
      <p>Time Zones: {country.timezones.join(", ")}</p>
      <a className="maps-link" 
      href={country.maps.googleMaps}
      target="_blank">
        View on Google Maps
      </a>
    </div>
  );
};

export default CountryDetail;