import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--darkGray);
  color: white;
  width: 100%;
  height: 2rem;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 5%;
  font-size: var(--fontSmall);
  span {
    padding: 3px;
  }
  @media screen and (max-width: 768px) {
    font-size: 75%;
  }
`;
