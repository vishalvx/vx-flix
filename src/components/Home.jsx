import React from 'react';
// custom Hooks
import { useHomeFetch } from '../hooks/useHomefetch';

//components
import Header from './Header/Header';
import FrontImage from './Front Image/FrontImage';
import Grid from './Grid/Grid';
import ThumbnailImage from './ThumbnailImage/ThumbnailImage';
import Spinner from './Spinner/Spinner';
import SearchBar from './SearchBar/SearchBar';
import LoadMore from './LoadMore/LoadMore';

//sources
import noImage from '../image/no_image.jpg';
import {
  BACKDROP_SIZE,
  POSTER_SIZE,
  IMAGE_BASE_URL,
  POPULAR_BASE_URL,
} from '../Config';

const Home = () => {
  // this i custom hook for fetching home data and return { movies, loading, error } object
  const {
    movies,
    loading,
    error,
    setSearchTerm,
    searchTerm,
    setIsLoadingMore,
  } = useHomeFetch();

  // console.log(movies);

  return (
    <>
      <Header />

      {!searchTerm && movies.results[0] ? (
        <FrontImage
          title={movies.results[0].title}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
          text={movies.results[0].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid
        header={
          searchTerm ? `Search Reasults For ${searchTerm}` : 'Popular Movies'
        }
      >
        {movies.results.map((movie) => (
            <ThumbnailImage
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : noImage
              }
              movieId={movie.id}
              key={movie.id + Math.random() * 100}
              title={movie.title}
              clickable={true}
            />
        ))}
      </Grid>

      {loading && <Spinner />}

      {movies.page < movies.total_pages && !loading && (
        <LoadMore text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};
export default Home;
