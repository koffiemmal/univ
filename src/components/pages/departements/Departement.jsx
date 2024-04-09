import React, { useState } from "react";
import style from "./Departement.module.css";
import MOnimage from "../../assets/graduating-time-covid-19-background (1).jpg";




const Departement = () => {
    
    const [isHovered, setIsHovered] = useState(false);
    let [Filiere,setFiliere] = useState([
        {"nom":"SIL","description":"systeme Informatique et Logiciel","specialités":"Programmation embarqués et mobile"},
        {"nom":"GII","description":"Genie Electrique et Informatique Industriel","specialités":"Maitrise des énergies renouvelables, systemes Automatisé des reseaux industriels,maintenance industriel en genie electrique "},
        {"nom":"GMP","description":"genie mecanique et productive","specialités":"mecatronique(maintenance automobile) , robotique,conception mecanique ,métrologie,controle qualité  "},
        {"nom":"GLT","description":"gestion logistique et transport ","specialités":"exploitation logistique et transport"},
        {"nom":"GEA","description":"gestion des entreprises et administration","specialités":"assistant de gestion administrative,gestion des ressources humaines ,comptabilités des entreprises(controle audite et qualité)"},
        {"nom":"TC","description":"technique de Commercialisation" ,"specialités":"managment et gestion de la relation client,marketing et communication,commerce international et transit,assurance banque-Finance"},
        {"nom":"Infos-Com","description":"informations et Communication","specialités":"journalisme audio visuelle,communication et managment d'evenement ,communication des organisations "}

    ])
 
      
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
