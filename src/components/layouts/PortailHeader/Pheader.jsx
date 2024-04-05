import React from 'react'
import style from "./Pheader.module.css"
import { Outlet } from 'react-router-dom'

const Pheader = () => {
  return (
    <div >
      <header className={style.Pheader}>

        <div className={style.LogoAndPortail}>
            
            <section className={style.logo}>
          
            </section>
            <section className={style.monPortail}>
                <p>
                  Mon <br />portail
                </p>
            </section>
        </div>

      </header>
      <Outlet/>
    </div>
  )
}

export default Pheader
