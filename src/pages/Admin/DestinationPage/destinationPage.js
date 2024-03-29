import React, { useState } from 'react';
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
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
} from './destinationStyles'; // Import styled components

const DestinationPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState({
    name: '',
    district: '',
    description: '',
    category: '',
  });

  const handleChange = (event) => {
    setNewDestination({
      ...newDestination,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDestinations([...destinations, newDestination]);
    setNewDestination({ name: '', district: '', description: '', category: '' });
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
          id="destination"
          name="name"
          value={newDestination.name}
          onChange={handleChange}
          required
        />

        <DestinationLabel htmlFor="district">District:</DestinationLabel>
        <DestinationInput
          type="text"
          id="district"
          name="district"
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
          id="category"
          name="category"
          value={newDestination.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="nature">Nature</option>
          <option value="history">History</option>
          <option value="adventure">Adventure</option>
        </DestinationSelect>

        <DestinationButton type="submit">Add Destination</DestinationButton>
      </DestinationFormContainer>

      <h2>Current Destinations</h2>
      <DestinationList>
        {destinations.map((destination) => (
          <DestinationListItem key={destination.name}>
            <DestinationListName>{destination.name}</DestinationListName>
            <p>
              {destination.district}, {destination.category}
            </p>
          </DestinationListItem>
        ))}
      </DestinationList>
    </div>
    /</div>
  );
};

export default DestinationPage;
