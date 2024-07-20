import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import { fetchTrendingMovies } from '../tmdb-api';

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoader(true);
        setError(false);
        const data = await fetchTrendingMovies();
        setMovieList(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <MovieList onFilter={movieList} />
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};

export default HomePage;
