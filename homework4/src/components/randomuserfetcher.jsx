import React, { useState, useEffect } from 'react';
import './randomuserfetcher.css';

const RandomUserFetcher = () => {
  const [user, setUser] = useState(null);
  const [randomId, setRandomId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (randomId !== null) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`);
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          setUser(data);
          setError(null);

        } catch (error) {
          console.error('Error fetching user:', error.message);
          setError('Failed to fetch user. Please try again.');
          setUser(null);
        }
      };

      fetchUser();
    }
  }, [randomId]);

  const handleClick = () => {
    const id = Math.floor(Math.random() * 10) + 1;
    setRandomId(id);
  };

  return (
    <div className="container">
      <button className="button" onClick={handleClick}>
        Get Random User
      </button>
      
      {error && <p className="error">{error}</p>} {setError}
      
      {user && (
        <div className="userInfo">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Phone Number:</strong> {user.phone}</p>
          <p><strong>Company Name:</strong> {user.company.name}</p>
        </div>
      )}
    </div>
  );
};

export default RandomUserFetcher;