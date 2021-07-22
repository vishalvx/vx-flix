import React from 'react';
import { useParams } from 'react-router-dom';
//Hook
import { useMovieDataFetch } from '../hooks/useMovieDataFetch';
//components
import Header from './Header/Header';
import Spinner from './Spinner/Spinner';

//Source
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../Config';
import NoImage from '../image/no_image.jpg';

const MovieDetail = () => {
  const { movieId } = useParams();
  const { movie, error, loading } = useMovieDataFetch({ movieId });

  return (
    <>
      <Header />
      {movieId}
      {loading && <Spinner />}
    </>
  );
};
export default MovieDetail;
