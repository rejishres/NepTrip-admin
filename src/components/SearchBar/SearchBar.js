import React, { useState, useEffect } from 'react';
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
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const navigate = useNavigate();

  const processSearchResults = (rawData) => {
    console.log(rawData);
    return rawData.map((result) => ({
      id: result.destination_id,
      name: result.destination_name,
    }));
  };

  useEffect(() => {
    if (shouldRedirect) {
      navigate('/recommendation');
    }
  }, [shouldRedirect, navigate]);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`http://localhost:5000/destinations/viewDestination/${searchKeyword}`, {
        withCredentials: true,
      });

      console.log('Raw API response:', response.data);

      const processedData = processSearchResults(response.data.result.data);
      console.log('Processed Data:', processedData);

      setSearchResults(processedData);
      setShouldRedirect(processedData.length > 0);
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
          placeholder="Search for destinations....."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </InputContainer>
      <SearchButton onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </SearchButton>

      {/* No need to render RecommendationPage here */}
    </SearchBarContainer>
  );
};

export default SearchBar;
