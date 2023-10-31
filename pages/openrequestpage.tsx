import Home from "../components/Home";
import React from "react";
import Concierge from "../components/Concierge";
import Dashconcierge from "../components/Dashconcierge";
import OpenRequest from "../components/OpenRequest";
import Head from 'next/head';

function OpenedRequestPage() {
  return  (
    <>
<Head>
        <title>QUEST - Votre demande - client</title>
</Head>
  <OpenRequest />;
  </>
  )
}

export default OpenedRequestPage;
