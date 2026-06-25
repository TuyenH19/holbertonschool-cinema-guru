import './navigation.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity';

function SideBar() {
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const setPage = (pageName) => {
    setSelected(pageName);

    // Define the mapping routes
    const routes = {
      'Home': '/home',
      'Favorites': '/favorites',
      'Watch Later': '/watchlater',
    };

    // Navigate to the corresponding route
    navigate(routes[pageName]);
  };

  // useEffect hook for fetching activities — re-runs on every route change
  useEffect(() => {
    axios.get('/api/activity', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching activities: ', error);
      })
  }, [location.pathname]);

  return (
    <nav className={`sidebar ${small ? 'small' : 'expanded'}`}
      onMouseEnter={() => setSmall(false)}
      onMouseLeave={() => setSmall(true)}
    >
      <ul className="navigation">
        <li onClick={() => setPage('Home')} className ={selected === 'Home' ? 'selected' : ''}>
          <FontAwesomeIcon icon={faFolder} />
         {!small && <span>Home</span>}
        </li>
        <li onClick={() => setPage('Favorites')} className ={selected === 'Favorites' ? 'selected' : ''}>
          <FontAwesomeIcon icon={faStar} />
          {!small && <span>Favorites</span>}  
        </li>
        <li onClick={() => setPage('Watch Later')} className ={selected === 'Watch Later' ? 'selected' : ''}>
          <FontAwesomeIcon icon={faClock} />
          {!small && <span>Watch Later</span>}
        </li>
      </ul>
      {!small && (
        <div className="activities-panel">
          <h3 className="activities-title">Latest Activities</h3>
          <ul className="activities">
            {activities.slice(0, 10).map((activity, index) => (
              <Activity key={index} activity={activity} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default SideBar;
