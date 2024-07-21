import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/Header.css'

import logoHeader from '../assets/logos/logo-red.png'

import Nav from "../components/Nav"


function Header (){

 return (
    <div className="header">
      <div className="header-content">
        <NavLink to="./home">
          <img src={logoHeader} className="header-content-logo" alt="logo-header"/>
        </NavLink>
        <Nav />
      </div>
    </div>
  )

}


export default Header;