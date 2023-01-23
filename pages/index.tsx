import { Inter } from "@next/font/google";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import media from "../styles/media";
import data from "../utils/data";
import ProductItem from "../components/ProductItem";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout title="Home Page">
        <CardContainar>
          {data.products.map((item) => (
            <ProductItem product={item} key={item.slug} />
          ))}
        </CardContainar>
      </Layout>
    </>
  );
}

const CardContainar = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;

  > div {
    -webkit-radius: var(--border-radius);
    -webkit-radius: var(--border-radius);
    -moz-border-radius: var(--border-radius);
    -moz-border-radius: var(--border-radius);
    border-radius: var(--border-radius);
    border-radius: var(--border-radius);
    border: solid #ccc;
  }
`;
