import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerleft}>
          <h1>QUEST</h1>
          <button>Devenir un concierge</button>
        </div>
        <div className={styles.headerright}>
          <i className={styles.awesomeicon}>Icon</i>
        </div>
      </header>

      <main className={styles.main}>
        <h1>CONCIERGERIE A LA CARTE</h1>
        <div className={styles.servicescontainer}>
          <div className={styles.service}>
            <img src="/concierges.jpeg" alt="Service" />
          </div>
          <div className={styles.servicedescription}>
      <p>DESCRIPTION DES SERVICES TYPES</p>
      <ul>
         <li>Réservation de restaurants, de spectacles, de billets de cinéma, de concerts, etc.</li>
         <li>Organisation de visites touristiques et de transports.</li>
         <li>Réception et envoi de colis et de lettres.</li>
         <li>Réception des livraisons et gestion de leur distribution.</li>
         <li>Informations et recommandations.</li>
         <li>Assistance aux clients.</li>
         <li>Réservation de transports.</li>
         <li>Services de nettoyage et de blanchisserie.</li>
         <li>Services de bien-être.</li>
         <li>Services de secrétariat.</li>
         <li>Gestion des clés.</li>
         <li>Autres services sur demande.</li>
      </ul>
   </div>
        </div>
        <button className={styles.greenbutton}>DÉMARRER</button>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerleft}>
          <p>FAQ</p>
          <div className={styles.separator}></div>
          <p>CONTACTEZ-NOUS</p>
        </div>
        <div className={styles.footerright}>
          <a href="/devenir-concierge">DEVENIR CONCIERGE</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

