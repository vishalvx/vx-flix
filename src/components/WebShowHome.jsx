import React from 'react';
// custom Hooks
import { useWebShowFetch } from '../hooks/useWebShowFetch';

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
} from '../Config';

const WebShowHome = () => {
  const {
    webShows,
    loading,
    setSearchTerm,
    searchTerm,
    setIsLoadingMore,
  } = useWebShowFetch();

  return (
    <>
      <Header page={'WebShowPage'} />

      {!searchTerm && webShows.results[0] ? (
        <FrontImage
          title={webShows.results[0].title}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${webShows.results[0].backdrop_path}`}
          text={webShows.results[0].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid
        header={
          searchTerm ? `Search Reasults For ${searchTerm}` : 'Popular Web Show'
        }
      >
        {webShows.results.map((webShow) => (
          <ThumbnailImage
            image={
              webShow.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${webShow.poster_path}`
                : noImage
            }
            movieId={webShow.id}
            key={webShow.id + Math.random() * 100}
            title={webShow.name}
            clickable={true}
            page={"WebShowPage"}
          />
        ))}
      </Grid>

      {loading && <Spinner />}

      {webShows.page < webShows.total_pages && !loading && (
        <LoadMore text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};
export default WebShowHome;
