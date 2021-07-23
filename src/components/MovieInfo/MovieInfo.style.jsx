import styled from 'styled-components';
//Source
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../Config';

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-size: cover;
  background-position: center;
  padding: 2rem 3rem;

  `;
export const Content = styled.div`
  display: flex;
  max-width: 90vw;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 2rem;
  
  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
    font-size: 0.8rem;
  }


`;
export const Text = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  color: var(--white);
  overflow: hidden;
  h3 {
    padding: 0.8rem 0;
  }
  .director-rating {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .director-list {
    padding-left: 2rem;
  }
  .score {
      background-color: var(--white);
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      width:2rem;
        border-radius: 50%;
  }
  .genres > li {
  }
`;
