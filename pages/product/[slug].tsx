import styled from "@emotion/styled";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import media from "../../styles/media";
import data from "../../utils/data";

export default function ProductDetails() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <Layout title={product.name}>
      <Container>
        <Link href={"/"}>back to product</Link>
        <PageContent>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
        </PageContent>
        <div>
          <ul>
            <li>{product.name}</li>
            <li></li>
          </ul>
        </div>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  padding: 0px 1rem;
`;

const PageContent = styled.div`
  display: grid;
  padding: 1rem 0rem;

  ${media.tablet} {
    grid-template-columns: repeat(4, minmax(0px, 1fr));
    gap: 1rem;

    > div {
      grid-column: span 2 / span 2;
    }
  }
`;
