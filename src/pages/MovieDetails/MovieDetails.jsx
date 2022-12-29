import { useFetchMovie } from 'hooks/useFetchMovie';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const movie = useFetchMovie();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    movie && (
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
          <h2>
            {movie.title},({movie.release_date.split('-')[0]})
          </h2>
          <p>User score: {Math.round(movie.vote_average)}/10</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <ul>
            <li>
              <Link state={location.state} to="cast">
                Cast
              </Link>
            </li>
            <li>
              <Link state={location.state} to="reviews">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </section>
    )
  );
};

export default MovieDetails;
