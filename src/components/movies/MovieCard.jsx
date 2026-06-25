import './movies.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-regular-svg-icons';

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
      const token = localStorage.getItem('accessToken');
      // Fetch favorite titles
      axios.get('/api/titles/favorite/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then((response) => {
          if (response.data.some((t) => t.imdbId === movie.imdbId))
            setIsFavorite(true)
        });

        // Fetch watch later titles
        axios.get('/api/titles/watchLater/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then((response) => {
          if (response.data.some((t) => t.imdbId === movie.imdbId))
            setIsWatchLater(true);
        });
  }, []);

  function handleClick(type) {
    const isCurrentlyAdded = type === 'favorite' ? isFavorite : isWatchLater;
    const method = isCurrentlyAdded ? 'DELETE' : 'POST';
    const endpoint = `/api/titles/${type}/${movie.imdbId}`;

    const token = localStorage.getItem('accessToken');

    axios({ method, url: endpoint, headers: { 'Authorization': `Bearer ${token}` } })
      .then(() => {
        if (type === 'favorite') {
          setIsFavorite(!isFavorite);
        } else {
          setIsWatchLater(!isWatchLater);
        }
      })
      .catch((error) => {
        console.error(`Error updating ${type}:`, error);
      });
  };

  return (
    <li className="movie-card">
      <img
        src={movie.imageurls && movie.imageurls.length > 0 ? movie.imageurls[0] : ''}
        alt={movie.title}
      />
      <div className="movie-actions">
        <FontAwesomeIcon
          icon={faClock}
          className={isWatchLater ? 'watchlater-active' : 'watchlater-inactive'}
          onClick={() => handleClick('watchlater')}
        />
        <FontAwesomeIcon
          icon={faStar}
          className={isFavorite ? 'favorite-active' : 'favorite-inactive'}
          onClick={() => handleClick('favorite')}
        />
      </div>
      <h3 className="movie-card-title">{movie.title}</h3>
      <p className="movie-card-synopsis">{movie.synopsis}</p>
      <ul className="movie-card-genres">
        {movie.genres.map((genre) => (
          <li key={genre} className="genre-tag">
            {genre}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default MovieCard;
