import styled from "styled-components";

export const Anchor = styled.a`
  font-family: var(--sfmono-regular);
  margin-inline-start: 32px;
  transition: var(--transition);
  font-size: 14px;
  color: var(--clr-light);

  &::before {
    content: ".";
    color: var(--clr-primary);
    margin-inline-end: 5px;
  }

  &:hover {
    color: var(--clr-primary);
  }
`;
