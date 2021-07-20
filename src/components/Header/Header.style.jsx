import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--darkGray);
  color: var(--white);
  padding: 0.5rem 1rem;
  
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
  margin: 0 auto;
  .logo{
    font-family: 'Antic Slab', serif;
    font-weight: 600;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;

  li {
    padding:0.4rem;
    list-style: none;

  }
  .left-border{
    border-right: solid var(--white) 1px ;
  }
`;
