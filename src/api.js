import axios from 'axios';

const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer dbe36684e2464da716304791e3e63e03',
  },
};
axios.defaults.baseURL =
  'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

export const fetchMovieList = async () => {
  const response = await axios.get('', options);

  console.log(response.data.results);
  return response.data;
};
