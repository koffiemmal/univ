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
            
           
            <li className={style.listes}><NavLink style={{
          color:"black",
          textDecoration:"none"

        }} to={"/filiere"}>
             Etudes
              </NavLink>
            </li>
            <li className={style.listes}>
              <NavLink style={{
          color:"black",
          textDecoration:"none"

        }} to={"/filiere"}>
              Facultés
              </NavLink>
            
              
              </li>
            <li className={style.listes}><NavLink style={{
          color:"black",
          textDecoration:"none"

        }} to={"/"}>
              Notre Universités
              </NavLink>
            </li>
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
