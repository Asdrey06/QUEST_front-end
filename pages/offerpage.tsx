import Home from "../components/Home";
import React from "react";
import Concierge from "../components/Concierge";
import Offer from "../components/Offer";
import Head from 'next/head';

function OfferPage() {
  return  (
    <>
<Head>
        <title>QUEST - Votre offre</title>
</Head>
  <Offer />;
  </>
  )
}

export default OfferPage;
