import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

import {
  CategoryFormContainer,
  CategoryLabel,
  CategoryInput,
  CategoryButton,
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
} from './categoryStyles'; // Import styled components

const CategoryPage = () => {
  const [newCategory, setNewCategory] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setNewCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to save the new category (e.g., API call, local storage)
    console.log('New category:', newCategory);
    setNewCategory(''); // Clear input after submit
    navigate('/destinations'); // Redirect to destinations page after submit
  };

  return (
    <div className="app">
      <SidebarContainer>
        <SidebarMenu>
          <SidebarLink to="/admin/dashboard">Home</SidebarLink>
          <SidebarLink to="/admin/destination" active>Destinations</SidebarLink>
          <SidebarLink to="/admin/categories">Categories</SidebarLink> {/* Add this link */}
          {/* Add more sidebar links as needed */}
        </SidebarMenu>
      </SidebarContainer>

      <div className="main-content">
        <h1>Add a New Category</h1>
        <CategoryFormContainer onSubmit={handleSubmit}>
          <CategoryLabel htmlFor="category">Category Name:</CategoryLabel>
          <CategoryInput
            type="text"
            id="category"
            name="category"
            value={newCategory}
            onChange={handleChange}
            required
          />
          <CategoryButton type="submit">Add Category</CategoryButton>
        </CategoryFormContainer>
      </div>
    </div>
  );
};

export default CategoryPage;
