import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchMovieByName } from 'services/moviesApi';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('q');
  useEffect(() => {
    async function fetchMovies() {
      if (query === null || query.trim() === '') return;
      const data = await fetchMovieByName(query);
      if (data.length === 0) {
        return alert('There is no movie with that name');
      }
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
  console.log(movies);

  return (
    <section>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          placeholder="Please type a movie"
          name="query"
        />
        <button className={s.btn}>Search</button>
      </form>
      {movies.length !== 0 ? (
        <>
          <ul className={s.list}>
            {movies.map(({ title, id, poster_path }) => (
              <li className={s.listItem} key={id}>
                <Link
                  className={s.Link}
                  state={{ from: location }}
                  to={`/movies/${id}`}
                >
                  <img
                    className={s.image}
                    src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                    alt={title}
                  />
                  <p className={s.title}>{title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className={s.emptyPage}>No found movies</div>
      )}
    </section>
  );
};

export default MoviesPage;
