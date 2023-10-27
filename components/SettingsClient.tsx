import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";

function SettingsClient() {
    return (
        <div>
          {/* HEADER START */}
          <Header />
          {/* HEADER END */}
          <div className="h-full mt-20">
            <div className="flex">
              {" "}
              <h1
                className="pl-10  pb-5 pt-5 w-full mb-5 text-3xl font-semibold"
                style={{ color: "#68938B", backgroundColor: "#EFFDF5" }}
              >
                Modifiez vos informations
              </h1>
            </div>
            <div className="flex flex-row mb-5">
              {/* BLOC 1 */}
              <div className="ml-10 flex flex-col p-3 w-4/12 bg-neutral-100 rounded-3xl">
                <h1 className="font-light text-lg mb-5 font-semibold">
                  Vos coordonnées
                </h1>
                <div>Prénom & nom</div>
                <div className="flex flex-row">
                  <input
                    type="text"
                    className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="Prénom..."
                    
                  />
    
                  <input
                    type="text"
                    className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="Nom..."
                  
                  />
                </div>
                <div className="mt-8">Vos identifiants</div>
                <div className="flex flex-row">
                  <input
                    type="text"
                    className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="Nom d'utilisateur..."
                 
                  />
    
                  <input
                    type="password"
                    className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="Mot de passe..."
                
                  />
                </div>
                <div className="flex flex-row">
                  <input
                    type="textarea"
                    className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="E-mail..."
        
                  />{" "}
                </div>
                <div className="mt-8">Informations sur vous</div>
                <div className="flex flex-row">
                  <input
                    type="date"
                    className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="Date de naissance..."
            
                  />
    
                  <input
                    type="textarea"
                    className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="Adresse..."
                 
                  />
                </div>
                <div className="flex flex-row">
                  <input
                    type="textarea"
                    className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="Code postal..."
           
                  />
    
                  <input
                    type="textarea"
                    className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="Ville..."
                 
                  />
                </div>
                <div className="flex flex-row">
                  <input
                    type="text"
                    className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="Nationalité..."
  
                  />
    
                  <input
                    type="textarea"
                    className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="Numéro de téléphone..."
     
                  />
                </div>
                <div className="flex flex-row">
                  <input
                    type="textarea"
                    className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="Compétences..."
     
                  />
    
                  <input
                    type="textarea"
                    className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="Langues parlées..."
    
                  />
                </div>
                <div className="flex flex-row">
                  <input
                    type="textarea"
                    className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="À propos de vous..."
           
                  />
    
                  <input
                    type="textarea"
                    className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                    placeholder="Moyen de déplacement..."
                    
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <div className="mt-5 mr-3 ml-3">FR</div>
                    <input
                      type="textarea"
                      className="mt-3 mb-3 border-2 w-8/12 p-2 rounded-xl border-neutral-500"
                      placeholder="Relevé d'identité bancaire..."
                     
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  {" "}
                  <p className="text-red-500 mt-2 text-cente w-64"></p>
                </div>
              </div>
    
              {/* END OF BLOC 1  */}
    
              {/* BLOC 2 */}
          
    
              {/* END OF BLOC 2  */}
    
              {/* BLOC 3 */}

              {/* END OF BLOC 3  */}
            </div>
          </div>
    
          {/* FOOTER */}
          <Footer />
          {/* FOOTER END  */}
        </div>
      );

  }
  
  export default SettingsClient;