import React, { useState } from "react";
import style from "./Departement.module.css";
import MOnimage from "../../assets/graduating-time-covid-19-background (1).jpg";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider
} from "@chakra-ui/react";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

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
          console.log(element.images)
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
      <footer className={style.footer}>
        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-muted"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              {/*    <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a> */}
            </div>
          </section>

          <section className="">
            <MDBContainer
              className="text-center text-md-start mt-5"
              style={{
                width: "200vh",
              }}
            >
              <MDBRow
                className="mt-3"
                style={{
                  width: "180vh",
                  position: "relative",
                  right: "15vh",
                }}
              >
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4" style={{
                    fontSize:"50px"
                  }}>
                    <MDBIcon color="secondary" icon="gem" className="me-3" style={{
                      
                    }} />
                    UNIVERSITE SENGHOR
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Laravel
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </MDBCol>

                <MDBCol
                  md="4"
                  lg="3"
                  xl="3"
                  className="mx-auto mb-md-0 mb-4"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <section className={style.iconQuestion}>
                    <article className={style.IconsList}>
                      <ul>
                        <li>
                          {" "}
                          <Linkedin color="black" strokeWidth={2} />
                        </li>
                        <li>
                          <Facebook color="black" />{" "}
                        </li>
                        <li>
                          {" "}
                          <Youtube color="black" />{" "}
                        </li>
                        <li>
                          {" "}
                          <Twitter color="black" />
                        </li>
                        <li>
                          <Instagram color="black" />{" "}
                        </li>
                      </ul>
                    </article>
                    <article className={style.btnQuestions}>
                      <button>Des questions?</button>
                    </article>
                  </section>
                  <section className={style.logoParts}>
                    <article className={style.logo}></article>
                  </section>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </MDBFooter>
      </footer>
    </div>
  );
};

export default Departement;
