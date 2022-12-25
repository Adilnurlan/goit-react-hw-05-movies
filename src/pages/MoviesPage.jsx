import { Outlet } from 'react-router-dom';

export const MoviesPage = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="Please type a movie" />
        <button>Search</button>
      </form>
      <Outlet />
    </>
  );
};
