import Home from "../components/Home";
import React from "react";
import SettingsConcierge from "../components/SettingsConcierge";
import Head from 'next/head';

function SettingsConciergePage() {
  return  (
    <>
<Head>
        <title>QUEST - Paramètres concierge</title>
</Head>
  <SettingsConcierge />;
  </>
  )
}

export default SettingsConciergePage;
