import React, { useState, useEffect, useRef } from 'react';
//styles
import { Wrapper, Content } from './SearchBar.style';
//source
import searchIcon from '../../image/search-icon.svg';

const SearchBar = ({ setSearchTerm }) => {
  const [search, setSearch] = useState('');

  const initial = useRef(true);

  useEffect(() => {
    //checking is this initial render
    if (initial.current) {
      initial.current = false;
      return;
    }
    // adding timer delay for fetching data    
    const timer = setTimeout(() => {
      setSearchTerm(search);
    }, 500);

    //cleaning up the timer of get used
    return () => {
      clearTimeout(timer);
    };
  }, [setSearchTerm, search]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setSearch(event.currentTarget.value)}
          value={search}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
