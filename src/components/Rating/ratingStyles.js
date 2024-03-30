import styled from 'styled-components';

export const RatingWrapper = styled.div`
  font-size: 24px;
`;

export const Star = styled.span`
  color: ${({ filled }) => (filled ? 'gold' : 'lightgray')};
  cursor: pointer;
`;
