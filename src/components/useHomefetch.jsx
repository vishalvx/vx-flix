import React from 'react';

//Hooks
import { useState, useEffect } from 'react';

import API from '../API';

//sources
import noImage from '../image/no_image.jpg';


//initail state for reset the state
const initailState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [movies, setMovies] = useState(initailState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const moviesResult = await API.fetchMovies(searchTerm, page);

      //moviesResults obj contains page: , results: ,total_pages:,etc..

      setMovies((prev) => ({
        ...movies,
        results:
          page > 1
            ? [...prev.results, ...moviesResult.results]
            : [...moviesResult.results],
      }));
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  return {
    movies,
    loading,
    error,
  };
};

