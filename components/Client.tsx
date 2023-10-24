import styles from "../styles/Home.module.css";
import React from "react";
import Home from "../components/Home";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProfileConcierge from './ProfileConcierge';

function Client() {
    const conciergeData = [
        { name: 'Max', poster: 'backgroundconcierge1.png', voteAverage: 9.2, langue: "Langue: France", overview: 'Compétences Principales: good' },
        { name: 'Alex', poster: 'backgroundconcierge2.png', voteAverage: 8.5, langue: "Langue: France", overview: 'Compétences Principales: good' },
        { name: 'Audrey', poster: 'backgroundconcierge3.png', voteAverage: 8.5, langue: "Langue: France", overview: 'Compétences Principales: good' },
        { name: 'Will', poster: 'concierge3.jpeg', voteAverage: 7.6, langue: "Langue: France", overview: 'Compétences Principales: good' },
        { name: 'Francis', poster: 'concierges.jpeg', voteAverage: 8.4, langue: "Langue: France", overview: 'Compétences Principales:good' },
      ];
    
      
      const concierge = conciergeData.map(data => {
          return <ProfileConcierge name={data.name} poster={data.poster} voteAverage={data.voteAverage} langue={data.langue} overview={data.overview} 
          
        />;
      });




  return (
<div className="mt-20" style={{ backgroundColor: "#FFFFFF" }}>
      {/* HEADER START */}
      <Header />
      {/* HEADER END */}
     
   
      <div className="flex items-center justify-left mb-20">
        <h1 className="text-3xl" style={{ color: "black" }}>
          Bonjour Nikita Kofman, séléctionnez un concierge
        </h1>
      </div>
        <div className="flex items-center justify-center mb-20">
        Concierge à proximité:
        </div>
        <div className={styles.conciergesContainer}>
        {concierge}
      </div>
    <Footer />
    </div>


  );
}

export default Client;