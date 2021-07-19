import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 0.8rem;
  h1 {
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 768px) {
      h1 {
        font-size: var(--fontBig);
      }
    }
  }
`;
export const Content = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
