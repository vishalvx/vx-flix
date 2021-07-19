import styled from 'styled-components';

export const Spinner = styled.div`
  height: 4rem;
  width: 4rem;

  border: 5px solid var(--lightGray);
  border-top: 5px solid var(--medGray);
  border-radius: 50%;
  margin: 0 auto;


  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
