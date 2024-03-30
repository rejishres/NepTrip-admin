// CardStyles.js

import styled from 'styled-components';

const CardStyles = styled.div`
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card-content {
    padding: 16px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #666;
  }

  &:hover {
    background-color: #f0f0f0; /* Change to your desired hover background color */
    cursor: pointer; /* Change cursor to indicate interactivity */
`;

export default CardStyles;
