import "../styles/globals.css";
import Head from "../node_modules/next/head";
import React from "react";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>QUEST</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
