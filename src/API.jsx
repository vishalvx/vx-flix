import {
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
} from './config';

/*
fetchMovies : if user serach movie then it will store fist condition in end point or default popular page

fetchMovie : for movie detail page it will get movie data 


*/

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
