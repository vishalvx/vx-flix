import React from 'react';
//helpers
import { convertMoney, calcTime } from '../../Helper';
//styles
import { Wrapper, Content } from './MovieInfoBar.style';

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>Movie Length : {calcTime(time)}</p>
      </div>
      <div className="column">
        <p>Movie Budget : {convertMoney(budget)}</p>
      </div>
      <div className="column">
        <p>Movie Revenue : {convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);
export default MovieInfoBar;
