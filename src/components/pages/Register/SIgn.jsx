import React, { useState } from "react";
import style from "./Connexion.module.css";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { UserCheck2Icon } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import MeFilieres from "../departements/filieres.json"
import axios from "axios"

const Sign = () => {
  const navigate = useNavigate();
  let Filiere = MeFilieres.Filiere
  let handleCickHome = () => {
    navigate("/");
  };
  let [nom_user,setNom_user]= useState("")
  let [prenom_user,setPrenom_user]=useState("")
  let [email_user,setEmail_user]=useState("")
  let [password_user,setPassword_user] = useState("")
  return (
    <div className={style.mainSign}>
      <div className={style.opacitySign}>
        <form onSubmit={(e)=>{
          e.preventDefault()
          let newStudeny = {nom_user,prenom_user,email_user,password_user}

          console.log(newStudeny)

          axios.post("http://localhost:5000/user/signup",newStudeny)
          .then((res)=>{
            alert("le compte a ete cree avec succes")
            navigate("/login")

          })
          .catch((error)=>{
            alert("un probleme est survenu ressayer")
          })
        }} >
          <MDBRow
            style={{
              height: "5vh",
              fontFamily: "serif",
              fontSize: "25px",
            }}
          >
            <p>Creer un compte</p>
          </MDBRow>
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput id="form3Example1" placeholder="First name" onInput={(e)=>{
                setNom_user(e.target.value)
              }} />
            </MDBCol>
            <MDBCol>
              <MDBInput id="form3Example2" placeholder="Last name"  onInput={(e)=>{
                setPrenom_user(e.target.value)
              }}/>
            </MDBCol>
          </MDBRow>
          <MDBInput
            className="mb-4"
            type="email"
            id="form3Example3"
            placeholder="Email address"
            onInput={(e)=>{
              setEmail_user(e.target.value)
            }}
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form3Example4"
            placeholder="Password"
            onInput={(e)=>{
              setPassword_user(e.target.value)
            }}
          />
            <MDBRow style={{
            height:"3vh",
            position:"relative",
            left:"5vh"
          }}>
          
            <select name="" id="" style={{
              width:"18vh",
              position:"relative",
              left:"-3.5vh",
              top:"-1vh",
              border:"none",
              borderRadius:"5px",
              color:"gray"
            }}>
              <option value="">Choix de filiere </option>
              {
                Filiere && Filiere.map((element,index)=>{
                  return(
                    <option value="" key={index}> {element.description} </option>
                  )
                })
              }
             
            </select>
          </MDBRow>
          <MDBRow
            style={{
              position: "relative",
              left: "5vh",
            }}
          >
            <MDBCol>You have a account ?</MDBCol>
            <MDBCol>
              {" "}
              <NavLink to={"/login"}>
                Login <UserCheck2Icon />
              </NavLink>
            </MDBCol>
          </MDBRow>

          <MDBBtn
            type="submit"
            className="mb-4"
            block
            style={{
              width: "30vh",
              position: "relative",
              top: "2vh",
              height: "40px",
            }}
          >
            Sign in
          </MDBBtn>
          <MDBBtn
            style={{
              width: "14.5vh",
              backgroundColor: "rgba(165, 165, 165, 0.346) ",
              border: "1px solid black",
              borderRadius: "none",
              position: "relative",
              top: "0.7vh",
              left: "1vh",
              height: "40px",
              color:"white"
            }}
            onClick={handleCickHome}
          >
            Retour
          </MDBBtn>
        </form>
      </div>
    </div>
  );
};

export default Sign;
