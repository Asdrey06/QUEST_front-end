import Home from "../components/Home";
import React from "react";
import Concierge from "../components/Concierge";
import Head from 'next/head';

function ConciergeWelcome() {
  return  (
    <>
<Head>
        <title>QUEST - Bienvenue</title>
</Head>
  <Concierge />;
  </>
  )
}

export default ConciergeWelcome;
