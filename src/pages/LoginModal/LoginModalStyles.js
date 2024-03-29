// LoginStyles.js

import styled from 'styled-components';

const LoginStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .input-container {
    margin-bottom: 15px;

    label {
      display: block;
      font-size: 16px;
      margin-bottom: 5px;
    }

    input {
      width: 300px;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;
    }
  }

  button {
    background-color: #3498db;
    color: #fff;
    padding: 12px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: #267bb5;
    }
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }
`;

export default LoginStyles;
