import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import { fetchMovieReviews } from '../../tmdb-api';
import style from './MovieReviews.module.css';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setLoader(true);
        setError(false);
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getMovieById();
  }, [movieId]);

  return (
    <ul className={style.list}>
      {reviews.map(review => {
        return (
          <li key={review.id} className={style.item}>
            {review.author && <p>{review.author}</p>}
            {review.author_details.rating && (
              <p>User rating: {review.author_details.rating}</p>
            )}
            {review.content && <p>{review.content}</p>}
            {review.created_at && <p>data: {review.created_at}</p>}
          </li>
        );
      })}
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </ul>
  );
};

export default MovieReviews;
