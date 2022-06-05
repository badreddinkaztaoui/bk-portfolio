import Hero from "@/containers/Hero";
import type { NextPage } from "next";
import Layout from "src/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
