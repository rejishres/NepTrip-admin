import React, { useState, useEffect } from 'react';
import {
  DestinationFormContainer,
  DestinationLabel,
  DestinationInput,
  DestinationTextArea,
  DestinationSelect,
  DestinationButton,
  DestinationList,
  DestinationListItem,
  DestinationListName,
  DestinationListImage,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
} from './destinationStyles'; // Import styled components

const DestinationPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState({
    name: '',
    district_id: '',
    description: '',
    categories: '',
    img: '',
  });

  useEffect(() => {
    // Fetch data from the backend API
    fetch(`http://localhost:5000/destinations/createDestination`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        // Update the state with the fetched data
        setDestinations(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error (e.g., display an error message to the user)
      });
  }, []); // Empty dependency array to run the effect only once on component mount

  const handleChange = (event) => {
    setNewDestination({
      ...newDestination,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    setNewDestination({
      ...newDestination,
      img: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // First, upload the image to the backend
      const imageData = new FormData();
      imageData.append('img', newDestination.img);

      const imageResponse = await fetch(`http://localhost:5000/destinations/createDestination`, {
        method: 'POST',
        body: imageData,
      });

      if (!imageResponse.ok) {
        throw new Error('Failed to upload image');
      }

      const imageJson = await imageResponse.json();
      const imageUrl = imageJson.imageUrl;

      // Then, send the destination data along with the image URL to the backend
      const destinationData = {
        ...newDestination,
        img: imageUrl,
      };

      const destinationResponse = await fetch(`http://localhost:5000/destinations/createDestination`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(destinationData),
      });

      if (!destinationResponse.ok) {
        throw new Error('Failed to add destination');
      }

      // If successful, update the destinations state with the new destination
      const newDestinationWithImageUrl = { ...newDestination, img: imageUrl };
      setDestinations([...destinations, newDestinationWithImageUrl]);
      setNewDestination({ name: '', district_id: '', description: '', categories: '', img: '' });
    } catch (error) {
      console.error('Error adding destination:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="app">
      <SidebarContainer>
        <SidebarMenu>
          <SidebarLink to="/admin/dashboard">Home</SidebarLink>
          <SidebarLink to="/admin/destination" active>Destinations</SidebarLink>
          <SidebarLink to="/admin/category">Category</SidebarLink>
          {/* Add more sidebar links as needed */}
        </SidebarMenu>
      </SidebarContainer>
      <div>
        <h1>Explore Our Destinations</h1>
        <DestinationFormContainer onSubmit={handleSubmit}>
          <DestinationLabel htmlFor="destination">Destination Name:</DestinationLabel>
          <DestinationInput
            type="text"
            id="destination.id"
            name="name"
            value={newDestination.name}
            onChange={handleChange}
            required
          />

          <DestinationLabel htmlFor="district">District:</DestinationLabel>
          <DestinationInput
            type="text"
            id="district_id"
            name="district.name"
            value={newDestination.district}
            onChange={handleChange}
            required
          />

          <DestinationLabel htmlFor="description">Description:</DestinationLabel>
          <DestinationTextArea
            id="description"
            name="description"
            rows="5"
            value={newDestination.description}
            onChange={handleChange}
            required
          />

          <DestinationLabel htmlFor="category">Category:</DestinationLabel>
          <DestinationSelect
            id="categories.id"
            name="categories.name"
            value={newDestination.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="1">Nature</option>
            <option value="2">History</option>
            <option value="3">Adventure</option>
          </DestinationSelect>

          <DestinationLabel htmlFor="image">Image:</DestinationLabel>
          <DestinationInput
            type="file"
            id="img"
            name="img"
            onChange={handleImageChange}
            required
          />

          <DestinationButton type="submit">Add Destination</DestinationButton>
        </DestinationFormContainer>

        <h2>Current Destinations</h2>
        <DestinationList>
          {destinations.map((destination, index) => (
            <DestinationListItem key={index}>
              <DestinationListImage src={destination.image} alt={destination.name} />
              <DestinationListName>{destination.name}</DestinationListName>
              <p>
                {destination.district_id}, {destination.categories}
              </p>
            </DestinationListItem>
          ))}
        </DestinationList>
      </div>
    </div>
  );
};

export default DestinationPage;
