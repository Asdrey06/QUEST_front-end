import Home from "../components/Home";
import React from "react";
import OpenProfileConcierge from "../components/OpenProfileConcierge";
import Head from 'next/head';

function ConciergeProfilePage() {
    return  (
        <>
    <Head>
            <title>QUEST - Votre profil de concierge</title>
    </Head>
<OpenProfileConcierge />;
</>
)
}

export default ConciergeProfilePage;