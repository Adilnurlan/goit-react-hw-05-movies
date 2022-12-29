import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from 'services/moviesApi';
import s from './HomePage.module.css';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendMovies().then(setTrendMovies);
  }, []);

  // console.log(trendMovies);
  return (
    trendMovies && (
      <section className={s.section}>
        <ul className={s.list}>
          {trendMovies.map(({ title, id, poster_path }) => (
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
      </section>
    )
  );
};

export default HomePage;
