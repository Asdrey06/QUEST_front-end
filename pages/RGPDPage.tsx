import Home from "../components/Home";
import React from "react";
import RGPD from "../components/RGPD";
import Head from 'next/head';

function RGPDPage() {
  return  (
    <>
<Head>
        <title>QUEST - RGPD</title>
</Head>
  <RGPD />;
  </>
  )
}

export default RGPDPage;
