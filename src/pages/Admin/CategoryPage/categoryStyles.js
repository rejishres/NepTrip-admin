import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import for navigation links

export const CategoryFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 400px; /* Adjust width as needed */
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const CategoryLabel = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const CategoryInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;

export const CategoryButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const SidebarContainer = styled.aside`
  height: 100vh;
  width: 200px; /* Adjust width as needed */
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 2rem 0;
  width: 100%; /* Ensure full width within sidebar */
`;

export const SidebarLink = styled(Link)`
  display: block;
  padding: 1rem 2rem;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #;
  };
`;