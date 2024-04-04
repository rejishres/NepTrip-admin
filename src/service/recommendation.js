const trips = [
    { id: 1, location: 'Lakeside', category: 'Relaxing', amenities: ['sky diving', 'paragliding'] },
    { id: 2, location: 'Mountain', category: 'Adventure', amenities: ['hiking', 'skiing'] },
    { id: 3, location: 'City', category: 'Cultural', amenities: ['museums', 'restaurants'] },
  ];
  
  const userPreferences = {
    location: 'Pokhara',
    category: 'Adventure',
    amenities: ['Paragliding'],
  };
  
  const calculateSimilarity = (trip, userPrefs) => {
    const locationSimilarity = trip.location === userPrefs.location ? 1 : 0;
    const categorySimilarity = trip.category === userPrefs.category ? 1 : 0;
    const amenitiesSimilarity = trip.amenities.includes(userPrefs.amenities[0]) ? 1 : 0;
    return (locationSimilarity + categorySimilarity + amenitiesSimilarity) / 3;
  };
  
  const recommendTrips = (tripsData, userPrefs, topN) => {
    const similarityScores = tripsData.map(trip => ({
      ...trip,
      similarity: calculateSimilarity(trip, userPrefs),
    }));
  
    similarityScores.sort((a, b) => b.similarity - a.similarity);
  
    return similarityScores.slice(0, topN);
  };
  
  const recommendedTrips = recommendTrips(trips, userPreferences, 3);
  console.log(recommendedTrips);
  