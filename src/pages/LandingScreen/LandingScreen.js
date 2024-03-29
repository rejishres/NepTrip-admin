import React from "react";
// import { Link } from 'react-router-dom';
import { LandingScreenStyles } from './LandingScreenStyles';
import SearchBar from "../../components/SearchBar/SearchBar";

function LandingScreen() {
  return (
    <LandingScreenStyles>
      <div>
      </div>
      <div className="lake-hover">
        <h1>Welcome to our Travel Recommendations App</h1>
        <h3>Book Your Dream Vacation. Plan your perfect trip with us.</h3>
        <SearchBar />

      </div>
    </LandingScreenStyles>
  );
}

export default LandingScreen;
