import React from 'react';
//styles
import { Wrapper, Image } from './Actor.styles';

const Actor = ({ imageUrl, name, charactor }) => (
  <Wrapper>
    <Image src={imageUrl} />
    <h3>{name}</h3>
    <p>{charactor}</p>
  </Wrapper>
);
export default Actor;
