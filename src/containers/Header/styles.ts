import styled from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  @media screen and (max-width: 768px) {
    display: none;
  }

  width: 100vw;
  z-index: 11;
  top: 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0px 50px;
`;

export const Logo = styled.div`
  position: relative;
  color: var(--clr-light);
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;
