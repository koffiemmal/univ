import React, { useState } from "react";
import style from "./Connexion.module.css";
import { MDBInput, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import { User } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "./../../../Api/axios";
import MeFilieres from "../departements/filieres.json"
const Login = () => {
  const navigate = useNavigate();

  let [email_user, setEmail_user] = useState("");
  let [password_user, setPassword_user] = useState("");

  let Filiere = MeFilieres.Filiere

  let handleClickHome = () => {
    navigate("/");
  };
  return (
    <div className={style.mainLogin}>
      <div className={style.opacity}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let studentConnect = { email_user, password_user };

            axios
              .post("/user/login", studentConnect)
              .then((res) => {
                alert("vous vous etes connecter avec succes");
                navigate("/filiere");
              })
              .catch((error) => {
                alert("Votre email ou votre mot de passe est incorrect");
              });
          }}
        >
          <MDBRow
            style={{
              height: "5vh",
              fontFamily: "serif",
              fontSize: "25px",
            }}
          >
            <p>Se connectez</p>
          </MDBRow>
          <MDBInput
            className="mb-4"
            type="email"
            id="form1Example1"
            placeholder="Email address"
            onInput={(e) => {
              setEmail_user(e.target.value);
            }}
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form1Example2"
            placeholder="Password"
            onInput={(e) => {
              setPassword_user(e.target.value);
            }}
          />
        

          <MDBRow
            className="mb-4"
            style={{
              position: "relative",
              left: "2vh",
            }}
          >
            <MDBCol> Vous n'avez pas de compte ?</MDBCol>
            <MDBCol
              className={style.redirection}
              style={{
                color: "blue",
              }}
            >
              {" "}
              <NavLink to={"/sign"}>
                <p>
                  Creez en un <User />
                </p>
              </NavLink>{" "}
            </MDBCol>
          </MDBRow>

          <MDBBtn
            type="submit"
            block
            style={{
              width: "21vh",
              position: "relative",
              height: "40px",
            }}
          >
            Sign in
          </MDBBtn>
          <MDBBtn
            style={{
              width: "13vh",
              backgroundColor: "rgba(165, 165, 165, 0.346) ",
              border: "1px solid black",
              borderRadius: "none",
              position: "relative",
              left: "1vh",
              height: "40px",
            }}
            onClick={handleClickHome}
          >
            Retour
          </MDBBtn>
        </form>
      </div>
    </div>
  );
};

export default Login;
