import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesApi';
import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <section className={s.reviewsWrapper}>
      <ul className={s.reviewsList}>
        {reviews.length !== 0 ? (
          reviews.map(({ author, content, id }) => (
            <li className={s.reviewsListItem} key={id}>
              <h3 className={s.authorName}>Author: {author}</h3>
              <p className={s.reviewContent}>{content}</p>
            </li>
          ))
        ) : (
          <p className={s.noReviews}>There are no reviews</p>
        )}
      </ul>
    </section>
  );
};

export default Reviews;
