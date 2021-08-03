import React from 'react';

//Hooks
import { useState, useEffect } from 'react';

import API from '../API';

//Helpers
import { getFromSessionStorage } from '../Helper';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const moviesResult = await API.fetchMovies(searchTerm, page);

      //moviesResults obj contains page: , results: ,total_pages:,etc..

      setMovies((prev) => ({
        ...moviesResult,
        results:
          page > 1
            ? [...prev.results, ...moviesResult.results]
            : [...moviesResult.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    //when we in search , we don't store movies data in session storage
    if (searchTerm) {
      const sessionState = getFromSessionStorage('HomeMovies');
      if (sessionState) {
        setMovies(sessionState);
        return;
      }
    }

    setMovies(initailState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(movies.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore]);

  //this useEffect for set the session storage o intital render
  useEffect(() => {
    sessionStorage.setItem('HomeMovies', JSON.stringify(movies));
  }, [movies]);
  return {
    movies,
    loading,
    error,
    setSearchTerm,
    searchTerm,
    setIsLoadingMore,
  };
};
