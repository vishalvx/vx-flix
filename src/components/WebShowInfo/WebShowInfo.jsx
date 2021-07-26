import React from 'react';
import PropTypes from 'prop-types';
//Source
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../../Config';

import noImage from '../../image/no_image.jpg';
//components
import ThumbnailImage from '../ThumbnailImage/ThumbnailImage';
//styles
import { Wrapper, Content, Text } from './WebShowInfo.style';

const WebShowInfo = ({  webShow }) => (
  <Wrapper backdrop={webShow.backdrop_path}>
    <Content>
      <ThumbnailImage
      page={"WebShowPage"}
        image={
          webShow.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${webShow.poster_path}`
            : noImage
        }
        clickable={false}
        title={webShow.name}
      />
      <Text>
        <h1>{webShow.name}</h1>
        <div className="movie-title">
          <h3>Overview : </h3>
          <p>{webShow.overview}</p>
        </div>
        <div className="director-rating">
          <div>
            <h3>Rating :</h3>
            <div className="score">{webShow.vote_average}</div>
          </div>
          {/* <div className="director-list">
            <h3>
              Director
              {webShow.directors && webShow.directors.length > 1 ? 's :' : ' :'}
              {webShow.directors &&
                webShow.directors.map((director) => (
                  <div key={director.credit_id}> {director.name}</div>
                ))}
            </h3>
          </div> */}
        </div>
        <div className="genres">
          <h3>Genres :</h3>
          {webShow.genres &&
            webShow.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
        </div>
      </Text>
    </Content>
  </Wrapper>
);

WebShowInfo.propTypes = {
  movie: PropTypes.object,
};

export default WebShowInfo;
