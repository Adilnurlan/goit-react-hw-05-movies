import { Nav } from './Navigation.styled';
import { List } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <List>
        <li>
          <Nav to="/" end>
            Home
          </Nav>
        </li>
        <li>
          <Nav to="/movies">Movies</Nav>
        </li>
      </List>
    </nav>
  );
};
