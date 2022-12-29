import { useFetchMovie } from 'hooks/useFetchMovie';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const movie = useFetchMovie();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    movie && (
      <>
        <section className={s.section}>
          <div className={s.posterWrapper}>
            <button
              className={s.btn}
              onClick={() => {
                navigate(location?.state?.from ?? '/');
              }}
              type="button"
            >
              Go back
            </button>
            <img
              className={s.image}
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className={s.infoWrapper}>
            <h2 className={s.title}>
              {movie.title},({movie.release_date.split('-')[0]})
            </h2>
            <p className={s.rating}>
              User score: <span>{Math.round(movie.vote_average)}/10</span>
            </p>
            <h3 className={s.infoTitle}>Overview</h3>
            <p className={s.overview}>{movie.overview}</p>
            <h3 className={s.infoTitle}>Genres</h3>
            <ul className={s.genresList}>
              {movie.genres.map(({ name, id }) => (
                <li className={s.genresListItem} key={id}>
                  {name} <span>|</span>
                </li>
              ))}
            </ul>
            <ul className={s.linkList}>
              <li>
                <Link className={s.Link} state={location.state} to="cast">
                  Cast
                </Link>
              </li>
              <li>
                <Link className={s.Link} state={location.state} to="reviews">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <Outlet />
      </>
    )
  );
};

export default MovieDetails;
