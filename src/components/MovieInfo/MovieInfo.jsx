import React from 'react';
//Source
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../../Config';

import noImage from '../../image/no_image.jpg';
//components
import ThumbnailImage from '../ThumbnailImage/ThumbnailImage';
//styles
import { Wrapper, Content, Text } from './MovieInfo.style';

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <ThumbnailImage
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : noImage
        }
        clickable={false}
        title={movie.title}
      />
      <Text>
        <h1>{movie.title}</h1>
        <div className="movie-title">
          <h3>Overview : </h3>
          <p>{movie.overview}</p>
        </div>
        <div className="director-rating">
          <div>
            <h3>Rating :</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div className="director-list">
            <h3>
              Director 
              {movie.directors && movie.directors.length > 1 ? 's :' : ' :'}
              {movie.directors &&
                movie.directors.map((director) => (
                  <div key={director.credit_id}> {director.name}</div>
                ))}
            </h3>
          </div>
        </div>
          <div className="genres">
            <h3>Genres :</h3>
            {movie.genres &&
              movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </div>
      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;
