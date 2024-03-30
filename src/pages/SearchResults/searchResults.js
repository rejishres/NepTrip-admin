import React, { useState, useEffect } from 'react';
import { SearchResultsContainer } from './searchResultsStyles';
import Rating from '../../components/Rating/rating';

const SearchResults = () => {
  // State to store the fetched data
  const [searchedDestination, setSearchedDestination] = useState(null);
  const [youMayAlsoLike, setYouMayAlsoLike] = useState([]);
  const [nearbyHotels, setNearbyHotels] = useState([]);

  // Function to fetch data from the backend API
  const fetchData = async () => {
    try {
      // Fetch searched destination data
      const searchedResponse = await fetch(`http://localhost:5000/destinations/viewDestination`);
      const searchedData = await searchedResponse.json();
      setSearchedDestination(searchedData);

      // Fetch "You May Also Like" data
      const youMayAlsoLikeResponse = await fetch(`http://localhost:5000/recommendation/userRecommendation`);
      const youMayAlsoLikeData = await youMayAlsoLikeResponse.json();
      setYouMayAlsoLike(youMayAlsoLikeData);

      // Fetch nearby hotels data
      const nearbyHotelsData = searchedData.result.hotels;
      setNearbyHotels(nearbyHotelsData);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SearchResultsContainer>
      {searchedDestination && (
        <div className="searched-destination">
          <h2>Searched Destination</h2>
          <img src={searchedDestination.image} alt={searchedDestination.name} />
          <p>{searchedDestination.description}</p>
          <Rating rating={searchedDestination.rating} />
        </div>
      )}

      <div className="you-may-also-like">
        <h2>You May Also Like</h2>
        <div className="content-cards">
          {youMayAlsoLike.map((destination) => (
            <div className="content-card" key={destination.id}>
              <img src={destination.image} alt={destination.name} />
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              <Rating rating={destination.rating} />
            </div>
          ))}
        </div>
      </div>

      <div className="nearby-hotels">
        <h2>Nearby Hotels</h2>
        <div className="content-cards">
          {nearbyHotels.map((hotel) => (
            <div className="content-card" key={hotel.id}>
              <img src={hotel.image} alt={hotel.name} />
              <h3>{hotel.name}</h3>
              <p>{hotel.description}</p>
              <Rating rating={hotel.rating} />
            </div>
          ))}
        </div>
      </div>
    </SearchResultsContainer>
  );
};

export default SearchResults;
