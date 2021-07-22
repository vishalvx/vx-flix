import React from 'react';
import { Link } from 'react-router-dom';
//styles
import { Wrapper, Content } from './BreadCrum.style';

const BreadCrum = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">Home</Link>
      <span> | </span>
      <span> {movieTitle} </span>
    </Content>
  </Wrapper>
);
export default BreadCrum;