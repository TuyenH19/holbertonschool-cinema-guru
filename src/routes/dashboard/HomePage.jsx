import './dashboard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  function loadMovies(pageToLoad) {
      const token = localStorage.getItem('accessToken');
      axios.get('/api/titles/advancedsearch', {
        params: {
          minYear,
          maxYear,
          genres: genres.join(','),
          title,
          sort,
          page: pageToLoad  
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        const fetched = response.data.titles ?? [];
        if (pageToLoad === 1) {
          setMovies(fetched);
        } else {
          setMovies((prev) => [...prev, ...fetched]);
        }
      })
  };

  // Call loadMovies on component mount when filter/sort options change
  useEffect(() => {
    setPage(1); // Reset to first page on filter/sort change
    loadMovies(1);
  }, [minYear, maxYear, genres, title, sort]);

  // Handle Load More Button click
  const handleLoadMore = () => {
    setPage(page + 1);
    loadMovies(page + 1);
  };

  return (
    <div className="home-page">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        genres={genres}
        setGenres={setGenres}
        sort={sort}
        setSort={setSort}
        title={title}
        setTitle={setTitle}
      />

      <ul className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
      
      <div className="load-more">
        <Button label="Load More.." onClick={handleLoadMore} />
      </div>
    </div>
  )
}

export default HomePage;
