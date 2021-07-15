import React from 'react';
//styles
import { Wrapper, Content, Text } from '../Front Image/FrontImage.style';

export const FrontImage = ({ image, text, title }) => {
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
