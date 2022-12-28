import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled(NavLink)`
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
  font-size: 24px;
  color: white;
  padding: 2px 10px 6px 10px;
  background: linear-gradient(90deg, #1095c1 50%, #000 0) var(--_p, 100%) / 200%
    no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  transition: 0.4s;
  &:hover {
    --_p: 0%;
    color: black;
  }
  &.active {
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 20px;
`;
