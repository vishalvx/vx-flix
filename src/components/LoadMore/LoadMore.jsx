import React from 'react';
import PropTypes from "prop-types";
//styles
import { Wrapper } from './LoadMore.style';

const LoadMore = ({ text, callback }) => {
  return (
    <Wrapper as="button" onClick={callback}>
      {text}
    </Wrapper>
  );
};

LoadMore.propTypes ={
  text : PropTypes.string,
}

export default LoadMore;