import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
//styles
import { Image, Wrapper } from './ThumbnailImage.style';

const ThumbnailImage = ({ image, clickable, movieId, title, page }) => {
  return (
    <Wrapper>
      {clickable && page == 'MoviePage' ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="Thumbnail-poster" />
          <h4>{title}</h4>
        </Link>
      ) : clickable && page == 'WebShowPage' ? (
        <Link to={`/WebShowHome/${movieId}`}>
          <Image src={image} alt="Thumbnail-poster" />
          <h4>{title}</h4>
        </Link>
      ) : (
        <Image src={image} alt="Thumbnail-poster" />
      )}
      
    </Wrapper>
  );
};

ThumbnailImage.propTypes = {
  image: PropTypes.string,
  clickable: PropTypes.bool,
  movieId: PropTypes.number,
  title: PropTypes.string,
};

export default ThumbnailImage;
