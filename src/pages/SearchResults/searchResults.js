// SearchResults.js
import React from 'react';
import { SearchResultsContainer } from './searchResultsStyles';
import pokhara from '../../assets/pokhara.jpeg'
import fewa from '../../assets/fewa.jpeg'
import peace from '../../assets/peace.jpg'
import begnas from '../../assets/begnas.jpeg'
import Annapurna from '../../assets/annapurna-hotel.jpeg'
import NavBar from '../../components/Navbar/navbar';


const SearchResults = () => {
  const searchedDestination = {
    id: 1,
    name: 'Pokhara',
    image: `${pokhara}`,
    description: 'Lumbini is a significant pilgrimage site located in the Rupandehi District of Nepal, renowned as the birthplace of Siddhartha Gautama, who later became known as Lord Buddha. This UNESCO World Heritage Site attracts millions of Buddhist pilgrims and tourists every year. Lumbini is adorned with monasteries, temples, and stupas built by various Buddhist communities from around the world, reflecting the global reverence for Buddha teachings.',
  };

  const youMayAlsoLike = [
    {
      id: 2,
      name: 'Phewa Lake',
      image: `${fewa}`,
      description: 'Fewa Lake in Pokhara, Nepal, captivates with its serene waters reflecting the majestic Annapurna mountain range, offering a tranquil escape amidst breathtaking natural beauty.',
    },
    {
      id: 3,
      name: 'Peace Pagoda',
      image: `${peace}`,
      description: 'The Peace Pagoda, situated in Pokhara, Nepal, stands as a symbol of tranquility and harmony, offering panoramic views of the Annapurna range and Fewa Lake. ',
    },
    {
      id: 4,
      name: 'Begnas Lake',
      image: `${begnas}`,
      description: 'Begnas Lake, nestled amidst lush hills in Pokhara Valley, Nepal, enchants visitors with its serene waters and scenic surroundings. ',
    },
  ];

  const nearbyHotels = [
    {
      id: 5,
      name: 'Hotel Annapurna',
      image: `${Annapurna}`,
      description: 'Annapurna Hotel Pokhara, situated in the heart of Pokhara city, offers guests comfortable accommodations and convenient access to the citys attractions.',
    },
  ];

  return (
    <div>
        <NavBar />
    <SearchResultsContainer>
      <div className="searched-destination">
        <h2>Pokhara</h2>
        <img src={searchedDestination.image} alt={searchedDestination.name} />
        <p>{searchedDestination.description}</p>
      </div>

      <div className="you-may-also-like">
        <h2>Places to Visit</h2>
        <div className="content-cards">
          {youMayAlsoLike.map((destination) => (
            <div className="content-card" key={destination.id}>
              <img src={destination.image} alt={destination.name} />
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
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
            </div>
          ))}
        </div>
      </div>
    </SearchResultsContainer>
    </div>
  );
};

export default SearchResults;
