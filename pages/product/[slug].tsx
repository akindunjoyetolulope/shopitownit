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
          <div className="details">
            <div className="img">
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
              />
            </div>
            <div className="content">
              <ul>
                <li>{product.name}</li>
                <li>category: {product.category}</li>
                <li>brand: {product.brand}</li>
                <li>
                  {product.rating} of {product.numReviews} Reviews
                </li>
                <li>description: {product.description}</li>
              </ul>
            </div>
          </div>
          <div className="x">
            <div className="cardContainer">
              <div className="card">
                <div>price</div>
                <div>${product.price}</div>
              </div>
              <div className="card">
                <div>status</div>
                <div>{product.countInStock ? "In stock" : "Unavailable"}</div>
              </div>
              <button> Add To Cart </button>
            </div>
          </div>
        </PageContent>
      </Container>
    </Layout>
  );
}

const Container = styled.div``;

const PageContent = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;

  > div {
    width: 50%;
    ${media.mobile} {
      width: 100%;
    }
    ${media.smallDesktop} {
      width: 100%;
    }
  }

  .details {
    display: flex;
    width: 100%;

    .content {
      padding: 0.5rem;
      white-space: nowrap;
    }

    .img {
      margin-right: 10px;
    }

    ${media.mobile} {
      flex-direction: column;
      .img {
        margin-right: 0px;
        margin-bottom: 10px;
      }
    }
  }

  .x {
    padding: 0px 30px;
  }

  .cardContainer {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #fff;
    border-radius: 8px;
    background-color: #fff;
    color: #000000;

    .card {
      margin-bottom: 2px;
      display: flex;
      justify-content: space-between;
      padding: 5px;
    }

    button {
      width: 100%;
      background-color: gray;
      border-radius: 8px;
      padding: 16px;
      margin: 0.5rem 0rem;
    }
  }

  ${media.mobile} {
    flex-direction: column;

    .x {
      margin-top: 1rem;
      padding: 0px 0px;
    }
  }

  ${media.smallDesktop} {
    flex-direction: column;

    .x {
      margin-top: 1rem;
      padding: 0px 0px;
    }
  }
`;
