import { Navigation } from '../Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <div className={s.container}>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Made by GOit student Nurlan Adil (2022)</footer>
    </div>
  );
};

export default Layout;
