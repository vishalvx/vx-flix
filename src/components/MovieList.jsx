import React, { useState, useEffect } from 'react';
import { Search } from './Search';

import { Movies } from './Movies';

const MOVIE_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=90719954e0f97ee3aaee36dd91cdf164&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
const CONFIG_URL =
  'https://api.themoviedb.org/3/configuration?api_key=90719954e0f97ee3aaee36dd91cdf164';
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=90719954e0f97ee3aaee36dd91cdf164&language=en-US&query=';

export function MovieList() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState([]);

  /* 
  Getting Movies Data
  */
  const getMovies = async () => {
    try {
      const response = await fetch(MOVIE_URL);
      const movieResults = await response.json();
      setMovies(movieResults.results);
    } catch (e) {
      console.error(e);
    }
  };
  /* 
  Getting Movies config data
  */

  const getConfig = async () => {
    try {
      const response = await fetch(CONFIG_URL);
      const configResult = await response.json();
      setConfig(configResult);
    } catch (e) {
      console.error(e);
    }
  };
  const getSearch = async () => {
    try {
      const response = await fetch(
        SEARCH_URL + search + '&page=1&include_adult=false',
      );
      // console.log(SEARCH_URL + search + "&page=1&include_adult=false");
      const searchMovie = await response.json();
      setMovies(searchMovie.results);
      // console.log(movies);
    } catch (e) {
      console.error(e);
    }
  };
  /*
  loading function on first mount
  */
  useEffect(() => {
    getMovies();
    getConfig();
  }, []);

  /*
  Main Display Data
  */
  return (
    <div>
      <div className="search-div">
        <Search search={search} setSearch={setSearch} />
        <button onClick={getSearch}>Search</button>
      </div>
      <ul className="movie-list">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((movie) => (
            <Movies key={movie.id} config={config} movie={movie} />
          ))}
      </ul>
    </div>
  );
}
