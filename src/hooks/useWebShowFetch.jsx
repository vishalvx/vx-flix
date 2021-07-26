import React from 'react';

//Hooks
import { useState, useEffect } from 'react';

//sources
import API from '../API';

//initail state for reset the state
const initailState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useWebShowFetch = () => {
  const [webShows, setWebShows] = useState(initailState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchWebShows = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const webShowResult = await API.fetchWebShows(searchTerm, page);

      //moviesResults obj contains page: , results: ,total_pages:,etc..

      setWebShows((prev) => ({
        ...webShowResult,
        results:
          page > 1
            ? [...prev.results, ...webShowResult.results]
            : [...webShowResult.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    setWebShows(initailState);
    fetchWebShows(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingMore) return;

    fetchWebShows(webShows.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore]);

  return {
    webShows: webShows,
    loading,
    error,
    setSearchTerm,
    searchTerm,
    setIsLoadingMore,
  };
};
