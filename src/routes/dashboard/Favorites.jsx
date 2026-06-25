import './dashboard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';

export default function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
      axios.get('/api/titles/favorite/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        setMovies(response.data);
      })
  }, []);

  return (
    <div className="favorites-page">
      <h1>MOVIES YOU LIKE</h1>
      <ul className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
    </div>
  )
}
