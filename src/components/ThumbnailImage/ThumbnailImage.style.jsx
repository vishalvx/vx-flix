import styled from 'styled-components';

export const Wrapper = styled.div`
  h4 {
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  object-fit: cover;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.5s;
  animation: animateGrid 0.5s;

  :hover {
    opacity: 0.95;
    box-shadow: 0.5rem 0.5rem 0.9rem 0.44rem rgba(0, 0, 0, 0.4);
  }

  @keyframes animateGrid {
    from {
      opacity: 0;
      background-position: 50% 33%;
    }
    to {
      opacity: 1;
      background-position: 50% 30%;
    }
  }
`;
