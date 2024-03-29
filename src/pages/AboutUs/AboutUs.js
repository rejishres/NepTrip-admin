// About.js

import React from 'react';
import AboutStyles from './AboutUsStyles'; 
import NavBar from '../../components/Navbar/navbar';

const About = () => {
  return (
    <div>
        <NavBar />
    <AboutStyles>
      <h2>About Us</h2>
      <p>
        Welcome to NepTrip, your ultimate destination for crafting extraordinary travel experiences.
        Whether you're an avid explorer, a luxury traveler, or a culture enthusiast, NepTrip is here
        to turn your travel dreams into reality.
      </p>
      <p>
        At NepTrip, we believe that every journey is a story waiting to be written. Our mission is
        to empower you with the tools and inspiration to create your own narrative through immersive
        and personalized travel adventures.
      </p>
      <h3>What Sets NepTrip Apart?</h3>
      <p>
        - Curated Destinations: Discover handpicked destinations that showcase the best of nature,
        culture, and adventure.
      </p>
      <p>
        - Expert Recommendations: Receive expert tips and recommendations to make the most of your
        travel experience.
      </p>
      <p>
        - Seamless Planning: Enjoy a seamless planning process with our user-friendly interface and
        intuitive features.
      </p>
      <h3>Our Team</h3>
      <p>
        Meet the passionate team behind NepTrip, dedicated to ensuring your journey is not just a trip,
        but a collection of extraordinary moments. Our travel experts, guides, and support team work
        tirelessly to make your travel dreams come true.
      </p>
      {/* Add more content as needed */}
    </AboutStyles>
    </div>
  );
};

export default About;
