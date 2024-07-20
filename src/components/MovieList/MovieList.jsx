import { Link, useLocation } from 'react-router-dom';
import style from './MovieList.module.css';

const MovieList = ({ moviesList }) => {
  const location = useLocation();
  const imgDefaultURL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <ul className={style.list}>
      {moviesList.map(item => {
        return (
          <li key={item.id} className={style.item}>
            <img
              src={imgDefaultURL + item.poster_path}
              alt={`movie title: ${item.original_title}`}
            />
            <Link
              to={`/movies/${item.id}`}
              state={location}
              className={style.link}
            >
              {item.original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
