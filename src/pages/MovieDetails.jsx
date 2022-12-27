import { useFetchMovie } from 'hooks/useFetchMovie';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const MovieDetails = () => {
  const movie = useFetchMovie();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    movie && (
      <>
        <button
          onClick={() => {
            navigate(location?.state?.from ?? '/');
          }}
          type="button"
        >
          Go back
        </button>
        <h2>
          {movie.title},({movie.release_date.split('-')[0]})
        </h2>
        <img
          src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          alt={movie.title}
        />
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
        <Outlet />
      </>
    )
  );
};
