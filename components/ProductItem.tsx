/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import React from "react";
import { Product } from "../model/data";
import styles from "../styles/Home.module.css";

interface Props {
  product: Product;
}

export default function ProductItem(props: Props) {
  const { product } = props;
  return (
    <div>
      <a href={`product/${product.slug}`}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </a>
      <CardContent>
        <a href={`product/${product.slug}`}>{product.name}</a>
        <p>{product.brand}</p>
        <p>{product.price} $</p>
        <button type="button"> Add to Cart </button>
      </CardContent>
    </div>
  );
}

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;

  a {
    font-size: 18px;
    line-height: 24px;
  }

  p {
    margin-bottom: 0.5rem;
  }

  > button {
    background: rgba(var(--callout-border-rgb), 0.25);
    border: 0;
    color: white;
    padding: 10px;
    margin: 20px;
    width: 80%;
    cursor: pointer;
    &:hover {
      background: rgba(var(--callout-border-rgb), 0.5);
    }
  }
`;
