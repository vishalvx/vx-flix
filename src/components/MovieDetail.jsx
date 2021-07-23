import React from 'react';
import { useParams } from 'react-router-dom';
//Hook
import { useMovieDataFetch } from '../hooks/useMovieDataFetch';
//components
import Header from './Header/Header';
import Spinner from './Spinner/Spinner';
import BreadCrum from './BreadCrumb/BreadCrumb';
import MovieInfo from "./MovieInfo/MovieInfo"

//Source
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../Config';
import NoImage from '../image/no_image.jpg';


const MovieDetail = () => {
  const { movieId } = useParams();
  const { movie, error, loading } = useMovieDataFetch({ movieId });
  // console.log(movie);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <div> something Wrong .....</div>;
  }
  return (
    <>
      <Header />
      <BreadCrum movieTitle={movie.original_title} />
      <MovieInfo movie={movie}/>
    </>
  );
};
export default MovieDetail;
