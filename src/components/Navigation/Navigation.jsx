// import { NavLink } from 'react-router-dom';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Nav to="/" end>
            Home
          </Nav>
        </li>
        <li>
          <Nav to="/movies">Movies</Nav>
        </li>
      </ul>
    </nav>
  );
};
