import React, { useState } from 'react';
import { RatingWrapper, Star } from './ratingStyles';

const Rating = ({ initialRating, searchedDestinationId }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingClick = async (newRating) => {
    // Log the new rating to the console
    console.log('New Rating:', newRating);

    // Assuming you have a function to save the rating to the backend
    try {
      // Example: Saving the rating to the backend using fetch
      const response = await fetch(`http://localhost:5000/recommendation/createUserRecommendation?rating=${newRating}&d_id=${searchedDestinationId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating: newRating }),
      });

      if (!response.ok) {
        throw new Error('Failed to save rating');
      }

      // Update the local state with the new rating
      setRating(newRating);
    } catch (error) {
      console.error('Error saving rating:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          filled={i < rating}
          key={i}
          onClick={() => handleRatingClick(i + 1)}
        >
          ★
        </Star>
      );
    }
    return stars;
  };

  return <RatingWrapper>{renderStars()}</RatingWrapper>;
};

export default Rating;
