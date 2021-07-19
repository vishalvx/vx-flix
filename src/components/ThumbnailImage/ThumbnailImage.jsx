import React from 'react';
//styles
import { Image,Wrapper } from './ThumbnailImage.style';

const ThumbnailImage = ({ image, clickable, movieId,title }) => {
  return (
    <Wrapper>
      <Image src={image} alt="Thumbnail-poster" />
      <h4>{title}</h4>
    </Wrapper>
  );
};
export default ThumbnailImage;
