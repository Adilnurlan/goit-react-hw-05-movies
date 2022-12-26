import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchMovieByName } from 'services/moviesApi';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  useEffect(() => {
    async function fetchMovies() {
      if (query === null || query.trim() === '') return;
      const data = await fetchMovieByName(query);
      setMovies(data);
    }
    fetchMovies();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    setSearchParams({ q: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Please type a movie" name="query" />
        <button>Search</button>
      </form>
      {movies && (
        <>
          <ul>
            {movies.map(({ title, id }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
