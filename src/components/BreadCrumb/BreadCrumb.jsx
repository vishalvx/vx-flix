import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//styles
import { Wrapper, Content } from './BreadCrumb.style';

const BreadCrumb = ({ movieTitle, page }) => (
  <Wrapper>
    <Content>
      <Link to="/">Home</Link>
      {page == 'WebShowPage' ? (
        <Link to="/WebShowHome">
          <span> {' | '} </span>Web Shows
        </Link>
      ) : null}
      <span> {' | '} </span>
      <span> {movieTitle} </span>
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string,
};

export default BreadCrumb;
