import { motion } from "framer-motion";
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
    color: var(--clr-light);
    max-width: 600px;
    margin-bottom: 32px;
  }
`;

export const Title = styled.div`
  .intro {
    display: block;
    font-size: 20px;
    margin-bottom: 12px;
    color: var(--clr-yellow);
  }

  h1,
  h2 {
    font-size: 80px;
    line-height: 88px;
    font-weight: bold;
  }

  h2 {
    color: var(--clr-light);
  }
`;

export const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

export const Char = styled(motion.span)`
  display: inline-block;
  margin-right: -0.02em;
`;
