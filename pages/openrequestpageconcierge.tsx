import Home from "../components/Home";
import React from "react";
import Concierge from "../components/Concierge";
import Dashconcierge from "../components/Dashconcierge";
import OpenRequestConcierge from "../components/OpenRequestConcierge";
import Head from 'next/head';

function OpenedRequestPageConcierge() {
  return  (
    <>
<Head>
        <title>QUEST - Votre demande - concierge</title>
</Head>
  <OpenRequestConcierge />;
  </>
  )
}

export default OpenedRequestPageConcierge;
