import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchMovieByName } from 'services/moviesApi';
import { Pagination } from 'components/Pagination/Pagination';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const location = useLocation();
  const query = searchParams.get('q');

  useEffect(() => {
    async function fetchMovies() {
      if (query === null || query.trim() === '') return;
      const data = await fetchMovieByName(query, page);
      if (data.results.length === 0) {
        return alert('There is no movie with that name');
      }
      setMovies(data);
    }
    fetchMovies();
  }, [query, page]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    setSearchParams({ q: form.elements.query.value });
    form.reset();
  };

  const handlePageClick = event => {
    const newPage = event.selected + 1;
    setPage(newPage);
  };

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
      {movies.results ? (
        <>
          <ul className={s.list}>
            {movies.results.map(({ title, id, poster_path }) => (
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
          {movies.total_results > 20 && (
            <Pagination
              pageCount={movies.total_pages}
              onClick={event => handlePageClick(event)}
            />
          )}
        </>
      ) : (
        <div className={s.emptyPage}>No found movies</div>
      )}
    </section>
  );
};

export default MoviesPage;
