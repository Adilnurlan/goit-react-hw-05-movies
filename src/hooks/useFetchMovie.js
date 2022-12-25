import { useState, useEffect } from 'react';
import { fetchMovieById } from 'services/moviesApi';
import { useParams } from 'react-router-dom';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);
  return movie;
};
