import { Inter } from "@next/font/google";
import styled from "@emotion/styled";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout title="Home Page">Home Page</Layout>
      {/* <NavBar /> */}
    </>
  );
}

const Title = styled.title`
  color: red;
`;
