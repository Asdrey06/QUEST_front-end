import Home from "../components/Home";
import React from "react";
import SettingsClient from "../components/SettingsClient";
import Head from 'next/head';

function SettingsClientPage() {
  return  (
    <>
<Head>
        <title>QUEST - Paramètres client</title>
</Head>
  <SettingsClient/>;
  </>
  )
}

export default SettingsClientPage;