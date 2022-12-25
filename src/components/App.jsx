import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPage';
import { MoviePage } from 'pages/MoviePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />}>
          <Route path=":movieId" element={<MoviePage />}>
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
