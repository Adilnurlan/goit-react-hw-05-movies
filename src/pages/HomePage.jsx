import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendMovies } from 'services/moviesApi';

export const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then(setTrendMovies);
  }, []);

  return (
    trendMovies && (
      <>
        <ul>
          {trendMovies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    )
  );
};
