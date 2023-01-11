import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import styled from "@emotion/styled";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

export default function Layout(props: Props) {
  return (
    <>
      <Head>
        <title>
          {props.title ? props.title + " - ShopItOwnIt" : "ShopIT - OwnIT"}
        </title>
        <meta name="description" content="Ecommerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyEl>
        <NavBar />
        <main>
          <MainEl>{props.children}</MainEl>
        </main>
        <Footer>
          <div>CopyRight @ 2023 ShopItOwnIt </div>
        </Footer>
      </BodyEl>
    </>
  );
}

const BodyEl = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const MainEl = styled.div`
  font-size: 0.85rem;
  max-width: var(--max-width);
  margin: auto;
  width: 100%;
  padding: 1rem;
  font-family: var(--font-mono);
`;

const Footer = styled.footer`
  border-top: 1px solid rgba(var(--callout-border-rgb), 0.25);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.85rem;
    max-width: var(--max-width);
    margin: auto;
    width: 100%;
    padding: 1rem;
    font-family: var(--font-mono);
  }
`;
