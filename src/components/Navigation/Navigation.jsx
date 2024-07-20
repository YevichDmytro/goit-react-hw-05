import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import style from './Navigation.module.css';

const Navigation = () => {
  const showActiveLink = ({ isActive }) => {
    return clsx(style.link, isActive && style.active);
  };

  return (
    <header className={style.header}>
      <nav className={style.navigation}>
        <NavLink to='/' className={showActiveLink}>
          Home
        </NavLink>

        <NavLink to='/movie' className={showActiveLink}>
          Search movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
