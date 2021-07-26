import React from 'react';
import PropTypes from 'prop-types';
//styles
import { Wrapper, Image } from './Actor.styles';

const Actor = ({ imageUrl, name, charactor }) => (
  <Wrapper>
    <Image src={imageUrl} />
    <h3>{name}</h3>
    <p>{charactor}</p>
  </Wrapper>
);

Actor.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  charactor: PropTypes.string,
};

export default Actor;
