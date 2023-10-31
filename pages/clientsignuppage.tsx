import Home from "../components/Home";
import React from "react";
import ClientSignUp from "../components/ClientSignUp";
import Head from 'next/head';

function ClientSignUpPage() {
  return (
    <>
<Head>
        <title>QUEST - Inscrivez-vous</title>
</Head>
  <ClientSignUp />;
  </>
)
}

export default ClientSignUpPage;
