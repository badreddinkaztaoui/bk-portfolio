import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: calc(100vh - 100px);
`;

export const Content = styled.div`
  p {
    font-size: 20px;
    line-height: 24px;
    color: var(--clr-dark);
    max-width: 600px;
    margin-bottom: 32px;
    margin-top: 0.5rem;
    @media screen and (max-width: 1100px) {
      font-size: 16px;
      max-width: 400px;
      margin-top: 1rem;
      margin-bottom: 22px;
    }
    @media screen and (max-width: 768px) {
      font-size: 14px;
      max-width: 80%;
    }
  }
`;

export const Title = styled.div`
  .intro {
    display: block;
    font-size: 22px;
    color: var(--clr-primary);
    margin-bottom: 1rem;
    @media screen and (max-width: 450px) {
      font-size: 16px;
    }
  }

  h1,
  h2 {
    font-size: 5.5rem;
    line-height: 1;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      font-size: 3rem;
      max-width: 350px;
    }
    @media screen and (max-width: 450px) {
      font-size: 2rem;
      max-width: 90%;
    }
  }

  h1 {
    color: var(--clr-secondary);
  }

  h2 {
    color: var(--clr-light);
    @media screen and (max-width: 1200px) {
      line-height: 1.3;
    }
    @media screen and (max-width: 768px) {
      line-height: 1.4;
    }
  }
`;
