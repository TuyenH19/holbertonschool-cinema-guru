import './dashboard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';

export default function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    axios.get('/api/titles/watchlater/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div className="watch-later-page">
      <h1>MOVIES TO WATCH LATER</h1>
      <ul className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
    </div>
  )
}
