import React from 'react';
import PropTypes from 'prop-types';
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

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
