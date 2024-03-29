// Hotels.js

import React, { useState, useEffect, useCallback } from 'react';
import { HotelsContainer, HotelCard } from './HotelsStyles'; // Import the styled components
import NavBar from '../../components/Navbar/navbar';
import fetchHotels from '../../service/hotelApi'; // Import the fetchHotels function

const Hotels = ({ selectedDestination }) => {
  const [data, setData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const fetchData = useCallback(async () => {
    try {
      const hotelsData = await fetchHotels(searchKeyword); // Use the fetchHotels function
      setData(hotelsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [searchKeyword]);

  useEffect(() => {
    fetchData();
  }, [fetchData, searchKeyword]); // Include fetchData in the dependency array

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div>
      <NavBar />
      <div>
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="Enter search keyword"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {data.map((destination) => (
        <div key={destination.name}>
          <h2>{destination.name}</h2>
          <HotelsContainer>
            {destination.hotels.map((hotel) => (
              <HotelCard key={hotel.name}>
                <h3>{hotel.name}</h3>
                <img src={hotel.image} alt={hotel.name} />
                <p>{hotel.description}</p>
              </HotelCard>
            ))}
          </HotelsContainer>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
