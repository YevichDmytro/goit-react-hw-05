import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from '../tmdb-api';
import { useEffect, useState } from 'react';
import { imgDefaultLink } from '../components/App/App';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieById();
  }, [movieId]);

  console.log(movie);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={imgDefaultLink + `${movie.poster_path}`} alt={movie.title} />
      <img src={imgDefaultLink + `${movie.backdrop_path}`} alt={movie.title} />

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
