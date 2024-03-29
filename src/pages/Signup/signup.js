import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { SignupForm } from './signupStyles'; // Importing SignupForm styled-component

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      console.log(handleSignup);
      const response = await axios.post('http://localhost:5000/user/signup', {
        firstName,
        lastName,
        email,
        password,
      });

      // Successful signup
      setSignedUp(true);
      setError('');
      console.log('Signup successful', response.data);

      // Redirect to the login page after successful signup
      navigate('/login');
    } catch (err) {
      // Failed signup
      setSignedUp(false);
      setError('Failed to signup. Please try again.');
      console.error('Signup failed', err);
    }
  };

  if (signedUp) {
    // Redirect to the login page after successful signup
    return null;
  }

  return (
    <SignupForm> {/* Using SignupForm styled-component */}
      <h2>Signup</h2>
      <div className="input-container">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
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
      <button onClick={handleSignup}>Signup</button>
      {error && <p className="error-message">{error}</p>}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </SignupForm>
  );
};

export default Signup;
