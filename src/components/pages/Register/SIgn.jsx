import React from "react";
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

const Sign = () => {
  const navigate = useNavigate();
  let handleCickHome = () => {
    navigate("/");
  };
  return (
    <div className={style.mainSign}>
      <div className={style.opacitySign}>
        <form>
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
              <MDBInput id="form3Example1" placeholder="First name" />
            </MDBCol>
            <MDBCol>
              <MDBInput id="form3Example2" placeholder="Last name" />
            </MDBCol>
          </MDBRow>
          <MDBInput
            className="mb-4"
            type="email"
            id="form3Example3"
            placeholder="Email address"
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form3Example4"
            placeholder="Password"
          />
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
