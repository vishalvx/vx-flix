import React from 'react';
//styles
import { Image } from './ThumbnailImage.style';

const ThumbnailImage = ({ image, clickable, movieId }) => {
  return (
    <div>
      <Image src={image} alt="Thumbnail-poster" />
    </div>
  );
};
export default ThumbnailImage;
