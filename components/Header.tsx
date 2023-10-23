import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";

function Header() {
  return (
    <div
      className="fixed top-0 w-full flex flex-row items-center justify-between pr-10 pl-10 pb-5 pt-5 mb-10"
      style={{ backgroundColor: "#33B49C" }}
    >
      <div className="flex flex-row items-center">
        <Link href="/">
          <img
            src="/questlogowhite.png"
            className="h-10 mr-10 cursor-pointer"
          />
        </Link>
        <button>
          <div className="w-48 border-black pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-white bg-neutral-800 hover:bg-neutral-600">
            <Link href="/conciergewelcome">Devenir concierge</Link>
          </div>
        </button>
      </div>

      <FontAwesomeIcon icon={faUser} className="h-6 text-white" />
    </div>
  );
}

export default Header;
