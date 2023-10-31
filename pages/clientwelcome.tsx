import Home from "../components/Home";
import React from "react";
import Client from "../components/Client";
import Head from 'next/head';

function ClientWelcome() {
  return (
    <>
<Head>
        <title>QUEST - Bienvenue</title>
</Head>
  <Client />;
  </>
)
}

export default ClientWelcome;