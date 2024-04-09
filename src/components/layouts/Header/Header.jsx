import React, { useState } from "react";
import style from "./Header.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";




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
            <li>
              <NavLink style={{
          color:"black",
          textDecoration:"none"

        }} to={"/filiere"}>
              Facultés
              </NavLink>
            
              
              </li>
            <li>Notre université</li>
        </ul>
    </section>

    <section className={style.portail}>
       
        <NavLink style={{
          color:"black",
          textDecoration:"none"

        }} to={"/monPortail"} >Mon portail</NavLink>
    </section>

      </div>
      <Outlet/>
    </div>
  );
};

export default Header;
