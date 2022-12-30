import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from 'services/moviesApi';
import { Pagination } from 'components/Pagination/Pagination';
import s from './HomePage.module.css';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  const [itemOffset, setItemOffset] = useState(1);

  useEffect(() => {
    async function fetchMovies() {
      const data = await fetchTrendMovies(itemOffset);
      setTrendMovies(data);
    }
    fetchMovies();
  }, [itemOffset]);

  const handlePageClick = event => {
    const Offset = event.selected + 1;
    setItemOffset(Offset);
  };

  return (
    trendMovies.results && (
      <section className={s.section}>
        <ul className={s.list}>
          {trendMovies.results.map(({ title, id, poster_path }) => (
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
        <Pagination
          pageCount={trendMovies.total_pages}
          onClick={event => handlePageClick(event)}
        />
      </section>
    )
  );
};

export default HomePage;
