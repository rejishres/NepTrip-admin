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
} from './destinationStyles';
import axios from 'axios';
 // Import styled components

const DestinationPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState({
    name: '',
    district_id: '',
    description: '',
    categories: [], // Change categories to an array
    img: '',
  });

  useEffect(() => {
    // Fetch data from the backend API
    axios.get(`http://localhost:5000/destinations`)
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
      const formData = new FormData();
      formData.append('name', newDestination.name);
      formData.append('district_id', newDestination.district_id);
      formData.append('description', newDestination.description);
      formData.append('categories',(newDestination.categories));
      formData.append('img', newDestination.img);

      const response = await axios.get(`http://localhost:5000/destinations/createDestination`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to add destination');
      }

      const data = await response.json();
      setDestinations([...destinations, data]);
      setNewDestination({ name: '', district_id: '', description: '', categories: [], img: '' });
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
            name="district_id"
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
            name="categories"
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
              <DestinationListImage src={destination.img} alt={destination.name} />
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
