
import styled from 'styled-components';

const FooterStyles = styled.footer`
background-color: #222;
color: #fff;
padding: 20px 0;

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-logo {
  display: flex;
  align-items: center;

  img {
    width: 40px; /* Adjust as needed */
    height: 40px; /* Adjust as needed */
    margin-right: 10px;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }
}

.footer-info {
  p {
    margin: 0;
    font-size: 0.9rem;
  }
}
`;

export default FooterStyles;
