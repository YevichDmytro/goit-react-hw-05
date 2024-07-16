import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const showActiveLink = ({ isActive }) => {
    return clsx(style.link, isActive && style.active);
  };

  return (
    <header>
      <nav className={style.list}>
        <NavLink to='/' className={showActiveLink}>
          HomePage
        </NavLink>

        <NavLink to='/movie' className={showActiveLink}>
          MoviesPage
        </NavLink>

        {/* <NavLink to='/movie/:movieId' className={showActiveLink}>
          MovieDetailsPage
        </NavLink>

        <NavLink to='/movies/:movieId/cast' className={showActiveLink}>
          MovieCast
        </NavLink> */}
      </nav>
    </header>
  );
};

export default Navigation;
