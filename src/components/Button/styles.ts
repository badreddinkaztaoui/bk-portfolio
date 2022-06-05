import styled, { css } from "styled-components";

export const Wrapper = styled.button<{
  status: "primary" | "warning" | "error" | "success" | "outline";
  rounded?: boolean;
  fill?: boolean;
}>`
  outline: none;
  border-radius: 5px;
  padding: 14px 24px;
  font-size: 15px;
  background-color: transparent;
  transition: var(--transition);
  cursor: pointer;
  ${({ status }) =>
    status === "outline"
      ? css`
          color: var(--clr-white);
          border: 1px solid var(--clr-white);
        `
      : css`
          color: var(--clr-status-${status});
          border: 1px solid var(--clr-status-${status});
          &:hover {
            background-color: var(--clr-status-${status});
            color: var(--white);
          }
        `};
`;
