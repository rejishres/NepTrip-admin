import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import the js-cookie library
import LoginStyles from './LoginModalStyles';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing access_token in the cookie
    const storedAccessToken = Cookies.get('access_token');
    if (storedAccessToken) {
      // You may want to validate the token or make a request to validate it on the server
      setLoggedInUser({ username: 'exampleUser' }); // Set the user as logged in
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        email,
        password,
    },
        {
          withCredentials: true,
        });

      if (response.data) {
        // Store the access_token in the cookie
        // Cookies.set('access_token', response.data.result.access_token, { expires: 7, path: '/' });

        setError('');
        setLoggedInUser(response.data); // Set user information on successful login
        navigate('/'); // Redirect to the home page
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Failed to login. Please try again.');
      console.error('Login failed', err);
    }
  };

  const handleLogout = () => {
    // Clear the access_token from the cookie
    Cookies.remove('access_token');
    setLoggedInUser(null); // Clear user information
  };

  return (
    <LoginStyles>
      {loggedInUser ? (
        // Display user information when logged in
        <div className="user-profile">
          <p>Welcome, {loggedInUser.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // Display login form when not logged in
        <>
          <h2>Login</h2>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          {error && <p className="error-message">{error}</p>}
        </>
      )}
    </LoginStyles>
  );
};

export default LoginModal;
