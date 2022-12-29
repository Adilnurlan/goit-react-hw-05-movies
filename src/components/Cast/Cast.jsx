import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/moviesApi';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  const defaultImg =
    'https://www.surf-saunton.co.uk/wp-content/uploads/2022/03/coming-soon-200x300-c-default.jpg';

  return (
    <div>
      <ul>
        {cast ? (
          cast.map(({ name, character, id, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w185${profile_path}`
                    : defaultImg
                }
                alt={name}
              />
              <h3>{name}</h3>
              <p>{character}</p>
            </li>
          ))
        ) : (
          <p>Sorry there is no cast memeber added</p>
        )}
      </ul>
    </div>
  );
};

export default Cast;
