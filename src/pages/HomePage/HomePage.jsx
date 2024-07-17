import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../tmdb-api';
import style from './HomePage.module.css';
import { imgDefaultLink } from '../../components/App/App';

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovieList(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <ul className={style.movieList}>
        {movieList.map(item => {
          return (
            <li key={item.id} className={style.listItem}>
              <img
                src={imgDefaultLink + `${item.poster_path}`}
                alt={item.original_title}
              />
              <Link to={`/movie/${item.id}`}>{item.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
