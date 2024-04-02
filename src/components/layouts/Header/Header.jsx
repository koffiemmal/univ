import React, { useState } from "react";
import style from "./Header.module.css";
import { Outlet } from "react-router-dom";




const Header = () => {


  return (
    <div className={style.mainHeader}>
      <div className={style.header}>

    <section className={style.logo}>


    </section>

    <section className={style.navbar}>
        <ul>
            <li>Futurs étudiants</li>
            <li>Etudiants actuels</li>
            <li>Etudes</li>
            <li>Facultés</li>
            <li>Notre université</li>
        </ul>
    </section>

    <section className={style.portail}>
        Mon portail
    </section>

      </div>
      <Outlet/>
    </div>
  );
};

export default Header;
