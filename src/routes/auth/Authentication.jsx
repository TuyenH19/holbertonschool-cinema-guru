import './auth.css';
import React, {useState} from 'react';
import axios from 'axios';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faPlus } from '@fortawesome/free-solid-svg-icons';

function Authentication({setIsLoggedIn, setUserUsername}) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Create handle function for form submission
  const handleSubmit = async (e) => {
    // preventDefault event method is used to disbale the default behavior of the form
    e.preventDefault();

    // Vaidate user input
    if (!username || username.trim() === '' || !password || password.trim() === '') {
      alert('Please input validated username & password');
      return;
    }

    let response;

    try {
      if (_switch) {
        // Login logic
        response = await axios.post('/api/auth/login', { username, password});
      } else {
        // Register logic
        response = await axios.post('/api/auth/register', { username, password});
        // Check if this user exists or not
      }
      const token = response.data.accessToken; 
      // On success: save new accout to database
      localStorage.setItem('accessToken', token);
      setUserUsername(username);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-toggle">
          <Button
            label="Sign In"
            onClick={() => setSwitch(true)}
            className={_switch ? 'active' : ''}
          />
          <Button
            label="Sign Up"
            onClick={() => setSwitch(false)}
            className={!_switch ? 'active' : ''}
          />
        </div>

        <div className="auth-content"> 
          {_switch ? (
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          ) : (
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          )}
        </div>
      </form>
  );
}

export default Authentication;
