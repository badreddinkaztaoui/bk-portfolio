import styled from "styled-components";

export const Anchor = styled.a`
  font-family: var(--sfmono-regular);
  margin-inline-start: 32px;
  font-size: 14px;
  cursor: pointer;
  transition: var(--transition);

  &::before {
    content: ".";
    color: var(--clr-yellow);
    margin-inline-end: 5px;
  }

  &:hover {
    color: var(--clr-yellow);
  }
`;
