import React from 'react'
import style from "./Connexion.module.css"
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { User } from 'lucide-react';
import { NavLink ,useNavigate} from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
let handleClickHome = () =>{
    navigate("/")
}
  return (
    <div className={style.mainLogin}>
       
       <div className={style.opacity}>

       <form>
        <MDBRow style={{
      
            height:"5vh",
            fontFamily:"serif",
            fontSize:"25px"
        }}>
                <p>Se connectez</p>
        </MDBRow>
      <MDBInput className='mb-4' type='email' id='form1Example1'  placeholder='Email address' />
      <MDBInput className='mb-4' type='password' id='form1Example2' placeholder='Password' />

      <MDBRow className='mb-4' style={{
        position:"relative",
        left:"2vh"
      }}>
        <MDBCol> Vous n'avez pas de compte ?</MDBCol>
        <MDBCol className={style.redirection} style={{
            color:"blue",
            
        }}> <NavLink to={"/sign"}><p>Creez en un <User/></p></NavLink> </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' block style={{
        width:"20vh",
        position:"relative",
       left:"1vh",
       height:"40px"
      }}>
        Sign in
      </MDBBtn>
      <MDBBtn 
      style={{
        width:"12vh",
        backgroundColor:"rgba(165, 165, 165, 0.346) ",
        border:"1px solid black",
        borderRadius:"none",
        position:"relative",
        left:"3vh",
        height:"40px"
     

      }} onClick={handleClickHome}>Retour</MDBBtn>
    </form>

       </div>

      
    </div>
  )
}

export default Login
