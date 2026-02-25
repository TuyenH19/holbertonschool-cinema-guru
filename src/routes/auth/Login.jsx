import './auth.css';
import React from 'react';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

function Login({username, password, setUsername, setPassword}) {
  return (
    <div>
      <h2>Sign in with your account</h2>
      <Input
        icon={<FontAwesomeIcon icon={faUser} />}
        label="Username:"
        type="text"
        value={username}
        setValue={setUsername}
      />
      <Input
        icon={<FontAwesomeIcon icon={faKey} />}
        label="Password:"
        type="password"
        value={password}
        setValue={setPassword}
      />
      <Button
        type="submit"
        className="auth-submit-btn"
        icon={<FontAwesomeIcon icon={faKey} />}
        label="Sign In"
      >
        Sign In
      </Button>
    </div>
  );
}

export default Login;
