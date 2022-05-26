import type { NextPage } from "next";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 60px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Heading>Hello Badr</Heading>
    </div>
  );
};

export default Home;
