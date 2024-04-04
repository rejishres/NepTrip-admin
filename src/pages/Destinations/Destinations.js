import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CardStyles from './CardStyles';
import FeaturedDestinationsStyles from './DestinationsStyles';
import NavBar from '../Navbar/navbar';
import Hotels from '../../pages/Hotels/Hotels';

const Destinations = () => {
  const [featuredDestinationsData, setFeaturedDestinationsData] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/destinations/viewDestination', {
         withCredentials: true,
        });
        console.log(response.data.result.data);
        setFeaturedDestinationsData(response.data.result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (destination) => {
    setSelectedDestination(destination);
    navigate(`/featured-destinations/${destination.destination_name}`);
   
  };

  return (
    <div>
      <NavBar />
      <FeaturedDestinationsStyles>
        <h2>Featured Destinations</h2>
        <div className="featured-destinations-grid">
          {featuredDestinationsData.map((destination) => (
            <div key={destination.id} onClick={() => handleCardClick(destination)}>
              <CardStyles>
                <img src={destination.image} alt={destination.destination_name} />
                <div className="card-content">
                  <h3>{destination.destination_name}</h3>
                  <p>{destination.description}</p>
                </div>
              </CardStyles>
            </div>
          ))}
        </div>
      </FeaturedDestinationsStyles>
      {selectedDestination && (
        <Hotels selectedDestination={selectedDestination} />
        // Render the detailed view conditionally based on the selected destination
      )}
    </div>
  );
};

export default Destinations;
