import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={s.container}>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Made by GOit student Nurlan Adil (2022)</footer>
    </div>
  );
};
