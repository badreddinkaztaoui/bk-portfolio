import styled from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  height: 100px;
  width: 100vw;
  z-index: 11;
  top: 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
`;

export const Logo = styled.div`
  position: relative;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;
