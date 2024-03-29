// SearchBarStyles.js
import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 12px;
  font-size: 16px;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 25px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const SuggestionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  background-color: #fff; /* White background color */
  border: 1px solid #ccc;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  top: 100%;
  left: 0;
  z-index: 1;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle box shadow */
`;

export const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: #001f3f; /* Dark blue text color */
  font-weight: bold; /* Bold letters */

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const SearchButton = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-left: 10px;
`;

// Rest of the code remains the same
