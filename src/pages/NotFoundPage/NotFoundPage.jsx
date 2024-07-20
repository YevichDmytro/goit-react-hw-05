import { Link } from 'react-router-dom';
import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={style.errorWrap}>
      <h1>404 - Page not found</h1>
      <p>
        Try reloading your page or back to {}
        <Link className={style.homeLink} to='/'>
          Home page
        </Link>
      </p>
      <img src='../../../public/error-img.jpg' alt='error image' />
    </div>
  );
};

export default NotFoundPage;
