// API URL for fetching data

const API_URL = 'https://api.themoviedb.org/3/';

const API_KEY = import.meta.env.SNOWPACK_PUBLIC_API_KEY;

// For seaching movie
const SEARCH_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const SEARCH_WEB_URL = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=`;

// for list popular movie
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const POPULAR_WEB_BASE_URL = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US`;

// for Movies poster and background
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

export {
  API_URL,
  SEARCH_URL,
  POPULAR_BASE_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
  API_KEY,
  POPULAR_WEB_BASE_URL,
  SEARCH_WEB_URL,
};
