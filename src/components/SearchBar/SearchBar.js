import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  SearchBarContainer,
  InputContainer,
  SearchInput,
  SearchButton
} from './SearchBarStyles';

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      setLoading(true);
      // Fetch search results from the backend
      // Assuming the backend returns an array of search results
      const response = await axios.get(`http://localhost:5000/destinations/viewDestination/${searchKeyword}`, {
        withCredentials: true,
      });

      // Process the search results if needed
      const searchResults = response.data;

      // Navigate to the search results page with the search keyword as a query parameter
      navigate(`/searchResults?keyword=${searchKeyword}`);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchBarContainer>
      <InputContainer>
        <SearchInput
          type="text"
          placeholder="Search for destinations..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </InputContainer>
      <SearchButton onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
