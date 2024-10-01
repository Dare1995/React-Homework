import React, { useState } from "react";
import './randomuserfetcher.css';

const RandomUserFetcher = () => {
  const [user, setUser] = useState(null);

  const fetchRandomUser = async () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${randomId}`
    );
    const data = await response.json();
    setUser(data);
  };

  return (
    <div className="container">
      <h1>Random User Fetcher</h1>
      <button onClick={fetchRandomUser} className="button">
        Get Random User
      </button>

      {user && (
        <div className="userCard">
          <h2>{user.name}</h2>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>
      )}
    </div>
  );
};

export default RandomUserFetcher;