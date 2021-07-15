import React from 'react';
import { useState, useEffect } from 'react';

// custom Hooks
import { useHomeFetch } from '../components/useHomefetch';

//components
import Header from './Header/Header';
import { FrontImage } from './Front Image/FrontImage';
//sources
import noImage from '../image/no_image.jpg';
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../config';

const Home = () => {
  // this i custom hook for fetching home data and return { movies, loading, error } object
  const { movies, loading, error } = useHomeFetch();
  console.log(movies);

  return (
    <div className="home">
      <Header />
      {movies.results[0] ? (
        <FrontImage
          title={movies.results[0].title}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
          text={movies.results[0].overview}
        />
      ) : null}
    </div>
  );
};
export default Home;
