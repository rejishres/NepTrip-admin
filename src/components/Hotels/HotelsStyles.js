// HotelsStyles.js

import styled from 'styled-components';

export const HotelsContainer = styled.div`
  margin: 20px;
`;

export const HotelCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  p {
    text-align: justify;
  }
`;
