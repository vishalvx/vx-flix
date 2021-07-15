import React from 'react';
import { Wrapper, Content, List } from './Header.style';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <h2 className="logo">VXflix</h2>
        <List>
          <li className="left-border">Movies</li>
          <li>Web Shows</li>
        </List>
      </Content>
    </Wrapper>
  );
};

export default Header;
