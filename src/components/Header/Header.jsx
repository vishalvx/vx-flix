import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Content, List } from './Header.style';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <h2 className="logo">VXflix</h2>
        </Link>
        <List>
          <li className="left-border">Movies</li>
          <li>Web Shows</li>
        </List>
      </Content>
    </Wrapper>
  );
};

export default Header;
