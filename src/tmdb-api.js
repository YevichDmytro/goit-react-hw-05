import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjA1YWY5ZDIzNzgzMmRlNGEwNmE3ZGNmZWYxNDQzZSIsIm5iZiI6MTcyMTE0MzgzNC40MTg1MDMsInN1YiI6IjY2OTY3ZTNkOWU0MWMyZWEwMDA5NmYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NtJ06H95ez8FqTGuhwZzcH5a6kAMES9HM6Dygm94opM';

const defaultParams = {
  language: 'en-US',
};

const params = {
  include_adult: false,
  language: 'en-US',
  page: 1,
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day', defaultParams);
  return response.data;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, params);
  return response.data;
};
