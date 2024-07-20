import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import { fetchMovieCredits } from '../../tmdb-api';
import style from './MovieCast.module.css';

const imgDefaultLink = 'https://image.tmdb.org/t/p/w500';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setLoader(true);
        setError(false);
        const data = await fetchMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getMovieById();
  }, [movieId]);

  return (
    <>
      <ul className={style.list}>
        {cast.slice(0, 15).map(item => {
          return (
            <li key={item.credit_id} className={style.item}>
              {item.profile_path ? (
                <img
                  src={imgDefaultLink + item.profile_path}
                  alt={`photo of ${item.original_name}`}
                />
              ) : (
                <p>No image</p>
              )}
              <div className={style.wrap}>
                {item.name && <p>Actor: {item.name}</p>}
                {item.character && <p>Role: {item.character}</p>}
                {item.known_for_department && (
                  <p>Status: {item.known_for_department}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};

export default MovieCast;
