import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./countryDetail.css";
import { Link } from 'react-router-dom';

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  // useEffect(() => {
  //   fetch(`https://restcountries.com/v3.1/name/${name}`)
  //     .then((response) => response.json())
  //     .then((data) => setCountry(data[0]))
  //     .catch((error) => console.error("Error fetching country details:", error));
  // }, [name]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountry();
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
    // The Link component from react-router-dom is primarily used for internal navigation within your React app, meaning it handles routes within the app itself rather than external URLs. Therefore, the way you're using the Link component here to navigate to an external site (Google Maps) won't work as expected.

    // For external links, it's better to use a standard <a> (anchor) tag. The target="_blank" and rel="noopener noreferrer" attributes ensure the link opens in a new tab safely.
  );
};

export default CountryDetail;