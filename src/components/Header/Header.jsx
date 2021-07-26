import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import { Wrapper, Content, List } from './Header.style';

const Header = ({ page }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <h2 className="logo">VXflix</h2>
        </Link>
        <List>
          {page == 'MovieHome' ? (
            <li className="left-border">Movies</li>
          ) : (
            <Link to="/">
              <li className="left-border">Movies</li>
            </Link>
          )}

          {page == 'WebShowHome' ? (
            <li>Web Shows</li>
          ) : (
            <Link to="/WebShowHome">
              <li>Web Shows</li>
            </Link>
          )}
        </List>
      </Content>
    </Wrapper>
  );
};

export default Header;
