// FeaturedDestinationsStyles.js

import styled from 'styled-components';

const FeaturedDestinationsStyles = styled.div`
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    margin-left: 20px;
  }

  .featured-destinations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-left: 20px;
  }
`;

export default FeaturedDestinationsStyles;
