import styled from 'styled-components';

export const Wrapper = styled.div`


  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.7) 97%
    ),
    url(${({ image }) => image});


    
  background-size: cover;
  background-position: 50% 30%;
  height: 60vh;
  position: relative;
  animation: animateImage 1s ease-in-out;

  @keyframes animateImage {
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
export const Content = styled.div`
  color: var(--white);
  width: 90%;
  margin: 0 auto;
`;
export const Text = styled.div`
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.2);
  max-width: 50vw;
  position: absolute;
  margin-right: 5%;
  bottom: 1rem;

  h1 {
    padding: 0.3rem;
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    padding: 0.4rem;

    @media screen and (max-width: 720px) {
      font-size: var(--fontSuperSmall);
    }
  }
  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
