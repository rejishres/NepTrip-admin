// navbarStyles.js

import styled from 'styled-components';

const NavBarStyles = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;

    ul {
      list-style: none;
      display: flex;

      li {
        margin-right: 20px;

        a {
          text-decoration: none;
          color: #fff;
          font-size: 16px;
          transition: color 0.3s ease;

          &:hover {
            color: #ffcc00;
          }
        }
      }
    }

    .logo {
      font-size: 24px;
      font-weight: bold;
      text-decoration: none;
      color: #fff;
    }

    .auth-buttons {
      display: flex;

      a {
        text-decoration: none;
        color: #fff;
        margin-left: 20px;
        font-size: 16px;
        transition: color 0.3s ease;

        &:hover {
          color: #ffcc00;
        }
      }
    }
  }
`;

export default NavBarStyles;
