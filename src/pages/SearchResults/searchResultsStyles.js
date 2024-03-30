/* searchResultsStyles.js */
import styled from 'styled-components';

export const SearchResultsContainer = styled.div`
  .searched-destination {
    text-align: center;
    margin-bottom: 20px;
  }

  .searched-destination img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .you-may-also-like,
  .nearby-hotels {
    text-align: center;
    margin-bottom: 20px;
  }

  .content-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .content-card {
    width: 250px;
    margin: 0 10px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .content-card img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .content-card h3 {
    margin-bottom: 10px;
  }

  .content-card p {
    font-size: 14px;
    color: #666;
  }
`;
