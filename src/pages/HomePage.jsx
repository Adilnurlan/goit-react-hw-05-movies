import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from 'services/moviesApi';

export const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendMovies().then(setTrendMovies);
  }, []);

  return (
    trendMovies && (
      <>
        <ul>
          {trendMovies.map(({ title, id }) => (
            <li key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  );
};
