import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  overflow: auto;
`;

export const Main = styled.main`
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;

  @media screen and (max-width: 1900px) {
    max-width: 90%;
  }
`;

export const SideContent = styled.div<{ pos: "left" | "right" }>`
  color: var(--clr-light);
  flex-direction: column;
  -moz-box-align: center;
  align-items: center;
  position: fixed;
  display: flex;
  bottom: 0;
  @media screen and (max-width: 426px) {
    display: none;
  }
  ${({ pos }) =>
    pos === "left"
      ? css`
          left: 2%;
        `
      : css`
          right: 2%;
        `}

  &::after {
    content: "";
    background-color: var(--clr-light);
    height: 80px;
    width: 1px;
  }
  a {
    font-family: var(--sfmono-light);
    transition: var(--transition);
    writing-mode: vertical-rl;
    letter-spacing: 0.1em;
    margin: 20px auto;
    padding: 10px;
    &:hover {
      transform: translateY(-3px);
      color: var(--clr-primary);
    }
  }

  ul {
    margin-bottom: 16px;
    li {
      text-align: center;
      a {
        font-size: 20px;
        margin: 0;
      }
    }
  }
`;
