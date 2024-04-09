import React from "react";
import style from "./Portail.module.css";
import Computer from "../../assets/rognable-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const Portail = () => {
  const navigate = useNavigate();

  let handleClickLogin = () => {
    navigate("/login");
  };
  let handleClickSign = () => {
    navigate("/sign");
  };

  return (
    <div className={style.mainPortail}>
      <header></header>
      <div className={style.portailDescription}>
        <section className={style.describ}>
          <article className={style.Title}>
            <span>
              Bienvenue sur{" "}
              <span className={style.specifyTitleBold}>monPortail</span>
            </span>
          </article>
          <article className={style.body}>
            <span>
              L'environnement numériques <br /> d'études de <br />{" "}
              <span className={style.bodyfooter}>L'Université SENGHOR</span>{" "}
              <p className={style.divider}></p>
            </span>
            <br />
          </article>
          <article className={style.secondBody}>
            <p>
              monPortail offre un accès centralisé à différents <br /> services
              de l’université tels que la demande d’admission,
              <br />
              l’inscription aux cours, les sites de cours et la <br /> commande
              de documents officiels.
            </p>
          </article>
        </section>
        <section className={style.btnDescribe}>
          <article className={style.AccessBtnDescribe}>
            <button onClick={handleClickLogin}>Accéder a mon Portail</button>
          </article>
          <article className={style.bodyfooter}> L'Université SENGHOR</article>
          <article className={style.LoginBtnDescribe}>
            <button onClick={handleClickSign}>Creer un compte</button>
          </article>
        </section>
      </div>
      <div className={style.portailImages}>
        <img src={Computer} alt="" />
      </div>
    </div>
  );
};

export default Portail;
