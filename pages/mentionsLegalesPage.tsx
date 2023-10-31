import Home from "../components/Home";
import React from "react";
import MentionsLegales from "../components/MentionsLegales";
import Head from 'next/head';

function MentionsLegalesPage() {
  return  (
    <>
<Head>
        <title>QUEST - Les mentions légales</title>
</Head>
  <MentionsLegales />;
  </>
  )
}

export default MentionsLegalesPage;
