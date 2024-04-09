import React, { useState } from "react";
import style from "./Departement.module.css";
import MOnimage from "../../assets/graduating-time-covid-19-background (1).jpg";

import MeFilieres from "./filieres.json"




const Departement = () => {
    

    const [isHovered, setIsHovered] = useState(false);


   let Filiere = MeFilieres.Filiere

      
  return (
    <div className={style.mainDepartements}>
      <div className={style.informations}>
        <section className={style.title}>
          <h3>Filieres</h3>
          <p></p>
        </section>
        <section className={style.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quam
            temporibus, fuga veniam magnam illo eligendi, consequatur modi
            inventore tenetur quisquam dolor ducimus magni. Facere minima odio
            assumenda fuga. Recusandae in ipsa et ipsum placeat maxime ab
            delectus iusto, itaque praesentium cumque modi id doloribus
            repellendus qui? Iure hic ipsum minus, sit ex sunt velit repellendus
            praesentium, voluptatibus harum quia consequuntur provident, tenetur
            aliquid tempora tempore nisi quam 
          </p>
        </section>
      </div>
      <div className={style.gridFilieres}>
      
        {Filiere && Filiere.map((element,index)=>{
            return(
 <section className={style.filiere}  >
            <article className={style.images}>
               <img src={MOnimage} alt="" />
              
              
            </article>
            <article className={style.filiereName}>
<span className={style.name}> {element.description}</span>
<span className={style.cygle} >{element.nom}</span>
            </article>
           
        </section> 
            )
        })}

      </div>
    </div>
  );
};

export default Departement;
