import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
// import style from './App.module.css';
// import clsx from 'clsx';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage';
import { fetchMovieList } from '../../api';

const App = () => {
  fetchMovieList();
  return (
    <div>
      <h1>App</h1>
      <Navigation />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie' element={<MoviesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
