import React from 'react';
import PropTypes from 'prop-types';
//styles
import { Wrapper, Content, Text } from '../Front Image/FrontImage.style';

const FrontImage = ({ image, text, title }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

FrontImage.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

export default FrontImage;
