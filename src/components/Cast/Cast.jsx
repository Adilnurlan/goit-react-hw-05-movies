import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/moviesApi';
import s from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  const defaultImg =
    'https://www.surf-saunton.co.uk/wp-content/uploads/2022/03/coming-soon-200x300-c-default.jpg';

  return (
    <section className={s.castWrapper}>
      <ul className={s.castList}>
        {cast ? (
          cast.map(({ name, character, id, profile_path }) => (
            <li className={s.castListItem} key={id}>
              <img
                className={s.castImage}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w185${profile_path}`
                    : defaultImg
                }
                alt={name}
              />
              <h3 className={s.castName}>{name}</h3>
              <p className={s.castCharacter}>{character}</p>
            </li>
          ))
        ) : (
          <p className={s.castInfo}>Sorry there is no cast memeber added</p>
        )}
      </ul>
    </section>
  );
};

export default Cast;
