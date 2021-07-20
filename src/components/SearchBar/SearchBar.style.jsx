import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--black);
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 0.6rem;

  input {
    height: 1.8rem;
    width: 60%;
    min-width: 40vw;
    background-color: var(--darkGray);
    border-radius: 0.8rem;
    border:none;
    
    color: var(--white);
    font-size: 1rem;

    @media screen and (max-width: 720px) {
      width: 70%;
    }
  }
  :hover {
    img {
      transition: all 0.3s ease-in-out;
      transform: rotate(-45deg);
    }
  }
  img {
    height: 1rem;
    margin: 0.3rem;
  }
`;
