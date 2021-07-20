import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  width: 25%;
  max-width: 25rem;
  height: 2rem;
  margin: 20px auto;
  margin-bottom: 40px;
  display: inherit;
  font-size: var(--fontSmall);
  background-color: var(--darkGray);
  color: var(--white);
  border: none;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;

  :hover {
    opacity: 0.95;
    background-color: var(--white);
    color: var(--medGary);
    border: 1px solid var(--black);
    box-shadow: 0.35rem 0.35rem 0.4rem 0.3rem rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 768px) {
    font-size: var(--fontSuperSmall);
    width: 30%;
  }
`;
