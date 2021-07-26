import React from 'react';
import PropTypes from 'prop-types';
//helpers
import { calcTime } from '../../Helper';
//styles
import { Wrapper, Content } from './WebShowInfoBar.styles';

const WebShowInfoBar = ({ time, seasons, episodes }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>Episodes Length : {time ?calcTime(time[0]):null}</p>
      </div>
      <div className="column">
        <p>Totals Seasons : {seasons}</p>
      </div>
      <div className="column">
        <p>Season episodes : {episodes}</p>
      </div>
    </Content>
  </Wrapper>
);

WebShowInfoBar.propTypes = {
  time: PropTypes.array,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default WebShowInfoBar;
