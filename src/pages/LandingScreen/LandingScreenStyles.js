import styled from 'styled-components';
import lake from "./mountain.jpg";

export const LandingScreenStyles = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${lake}) center/cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .lake-hover {
    text-align: center;
    color: #fff;
    margin-top: -300px; /* Adjust the margin as needed */
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color:#fff; /* Dark Navy Blue */
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 70px;
    color: fff; /* Dark Navy Blue */
  }

  button {
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #267bb5;
    }
  }
`;
