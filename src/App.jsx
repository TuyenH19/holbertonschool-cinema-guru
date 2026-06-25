import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;

    axios.post('/api/auth/', {}, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        setUserUsername(response.data.username);
        setIsLoggedIn(true);
      })
      .catch(() => {
        localStorage.removeItem('accessToken');
      });
  }, []);

  return (
    <div className="App">
      {isLoggedIn
        ? <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        : <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
      }
    </div>
  );
}
