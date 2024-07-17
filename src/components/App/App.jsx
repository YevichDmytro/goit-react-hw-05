import { Route, Routes } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';
import style from './App.module.css';

export const imgDefaultLink = 'https://image.tmdb.org/t/p/w500';

const App = () => {
  return (
    <div className={style.mainWrap}>
      <h1>App</h1>
      <Navigation />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie' element={<MoviesPage />} />
        <Route path='/movie/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
