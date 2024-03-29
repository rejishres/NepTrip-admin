import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DestinationFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-left: 100px;
`;

export const DestinationLabel = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
  margin-left: 100px;

`;

export const DestinationInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  margin-left: 100px;

`;

export const DestinationTextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  min-height: 100px;
  margin-left: 100px;
`;

export const DestinationSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;

export const DestinationButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export const DestinationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 100px;
`;

export const DestinationListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 1rem;
  margin-left: 100px;
`;

export const DestinationListName = styled.span`
  font-weight: bold;
  margin-left: 100px;
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
`;

export const MainContent = styled.div`
  margin-left: 100px; /* Adjust margin as needed */
  padding: 1rem; /* Add some padding if needed */
`;