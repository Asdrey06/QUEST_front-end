import Home from "../components/Home";
import React from "react";
import LeaveReview from "../components/LeaveReview";
import Head from "next/head";

function LeaveReviewPage() {
  return (
    <>
      <Head>
        <title>QUEST - Laissez un avis</title>
      </Head>
      <LeaveReview />;
    </>
  );
}

export default LeaveReviewPage;
