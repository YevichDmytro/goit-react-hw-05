import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { fetchMovieByTitle } from '../../tmdb-api';
import style from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const queryFilter = searchParams.get('query') ?? '';

  const changeQueryFilter = newQuery => {
    if (newQuery === '') return;

    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (queryFilter === '') return;
    const getMovieByTitle = async () => {
      try {
        setLoader(true);
        setError(false);
        const data = await fetchMovieByTitle(queryFilter);
        setMovieList(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getMovieByTitle();
  }, [queryFilter]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const inputValue = form.elements.search.value;
    changeQueryFilter(inputValue);
  };

  const movieTitleFilter = useMemo(() => {
    return movieList.filter(movieItem =>
      movieItem.original_title
        .toLowerCase()
        .includes(queryFilter.toLocaleLowerCase())
    );
  }, [movieList, queryFilter]);

  return (
    <div className={style.wrap}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input type='text' name='search' />
        <button type='submit'>Search</button>
      </form>
      <MovieList moviesList={movieTitleFilter} />
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default MoviesPage;
