import Home from "../components/Home";
import React from "react";
import ContactezNous from "../components/ContactezNous";
import Head from 'next/head';

function ContactezNousWelcome() {
return  (
        <>
    <Head>
            <title>QUEST - Contactez-nous</title>
    </Head>
<ContactezNous />;
</>
)
}

export default ContactezNousWelcome;