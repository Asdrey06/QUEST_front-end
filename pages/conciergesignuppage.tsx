import Home from "../components/Home";
import React from "react";
import ConciergeSignUp from "../components/ConciergeSignUp";
import Head from 'next/head';

function ConciergeSignUpPage() {
  return  (
    <>
<Head>
        <title>QUEST - Inscrivez-vous en tant que concierge</title>
</Head>
  <ConciergeSignUp />;
  </>
  )
}

export default ConciergeSignUpPage;
