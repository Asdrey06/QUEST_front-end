import Home from "../components/Home";
import React from "react";
import Head from 'next/head';

function Index() { 
  return  (
    <>
<Head>
        <title>QUEST - Home</title>
</Head>
  <Home />;
  </>
  )
}

export default Index;
