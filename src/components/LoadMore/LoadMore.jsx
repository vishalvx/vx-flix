import React from 'react';
//styles
import { Wrapper } from './LoadMore.style';

const LoadMore = ({ text, callback }) => {
  return (
    <Wrapper as="button" onClick={callback}>
      {text}
    </Wrapper>
  );
};


export default LoadMore;