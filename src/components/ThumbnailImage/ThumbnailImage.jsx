import React from 'react';

import { Link } from 'react-router-dom';
//styles
import { Image, Wrapper } from './ThumbnailImage.style';

const ThumbnailImage = ({ image, clickable, movieId, title }) => {
  return (
    <Wrapper>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="Thumbnail-poster" />
          <h4>{title}</h4>
        </Link>
      ) : (
        <Image src={image} alt="Thumbnail-poster" />
      )}
    </Wrapper>
  );
};
export default ThumbnailImage;
