import Home from "../components/Home";
import React from "react";
import Concierge from "../components/Concierge";
import Dashconcierge from "../components/Dashconcierge";
import Head from 'next/head';

function Dashboardconcierge() {
  return  (
    <>
<Head>
        <title>QUEST - Tableau de bord</title>
</Head>
  <Dashconcierge />;
  </>
  )
}

export default Dashboardconcierge;
