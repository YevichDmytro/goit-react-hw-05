import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDJiMzNmYjcyMmRkMWNmNTY2NTBhZDAwZjZiN2NjYSIsIm5iZiI6MTcyMTM5NTg3NC4wNzY3ODIsInN1YiI6IjY2OTY3ZTNkOWU0MWMyZWEwMDA5NmYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b9uYxq7LduQLp2o45o3wGwDC9GVaX4Hgeox3tBW585k';

const defaultParams = {
  language: 'en-US',
};

const movieByIdParams = {
  include_adult: false,
  language: 'en-US',
  page: 1,
};

const titleParams = {
  include_adult: false,
  language: 'en-US',
  primary_release_year: '',
  page: 1,
  region: '',
  year: '',
};

const reviewParams = {
  language: 'en-US',
  page: 1,
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day', defaultParams);
  return response.data;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, movieByIdParams);
  return response.data;
};

export const fetchMovieByTitle = async movieTitle => {
  const response = await axios.get(
    `/search/movie?query=${movieTitle}`,
    titleParams
  );
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`, defaultParams);
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, reviewParams);
  return response.data;
};
