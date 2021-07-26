import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--darkGray);
  display: flex;
  align-items: center;
  min-height: 100px;
`;

export const Content = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  width: 100%;
  .column {
    background-color: var(--medGray);
    display: flex;
    align-items: center;
    justify-content: center ;
    margin: 0 2rem;
    padding: 0.5rem;
    border-radius: 0.8rem;
    flex: 1;
    text-align: center;

    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
    .column {
      margin: 20px 0;
    }
  }
`;
