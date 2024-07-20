import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { fetchMovieById } from '../../tmdb-api';
import clsx from 'clsx';
import style from './MovieDetailsPage.module.css';

const imgDefaultLink = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/movie');
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setLoader(true);
        setError(false);
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getMovieById();
  }, [movieId]);

  const showActiveLink = ({ isActive }) => {
    return clsx(style.link, isActive && style.active);
  };

  return (
    <>
      <div className={style.detailsWrap}>
        <div>
          <Link to={backLinkRef.current} className={style.goBack}>
            Go back
          </Link>
          <h1>{movie.title}</h1>
          {movie.poster_path && (
            <img
              src={imgDefaultLink + `${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          {loader && <Loader />}
          {error && <ErrorMessage />}
        </div>

        <div className={style.linksWrap}>
          <NavLink to='cast' className={showActiveLink}>
            Cast
          </NavLink>
          <NavLink to='reviews' className={showActiveLink}>
            Reviews
          </NavLink>

          <Suspense fallback={<div>Loading component...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
