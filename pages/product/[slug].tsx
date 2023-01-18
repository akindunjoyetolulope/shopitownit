import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import { Product } from "../../model/data";
import data from "../../utils/data";

// interface Props {
//   product: Product;
// }

export default function ProductDetails() {
  //   const { product } = props;
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <Layout title={product.name}>
      <h1>{product.name}</h1>
    </Layout>
  );
}
