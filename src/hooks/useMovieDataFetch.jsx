import React, { useState, useEffect } from 'react';

//Source
import API from '../API';

export const useMovieDataFetch = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);
        setError(false);
        
        const movieResult = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        // get directors from credits
        const directors = credits.crew.filter(
          (member) => member.job === 'Director',
        );

        setMovie({
          ...movieResult,
          actor: credits.cast,
          directors: directors,
        });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchMovieData();
  }, [movieId]);

  return { movie, error, loading };
};
