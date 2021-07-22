import React, { useState, useEffect } from 'react';

//Source
import API from '../API';

export const useMovieDataFetch = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(movieId);

  // console.log(movieId);
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);
        setError(false);
        const movieResult = await API.fetchMovie(movieId);

        // const movie ={
        //   ...movie,

        // }
        // console.log(movieResult);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchMovieData();
  }, [movieId]);

  return { movie, error, loading };
};
