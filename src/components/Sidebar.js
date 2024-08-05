import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/Sidebar.css'

import pictoYoga from '../assets/icons/picto-yoga.png'
import pictoNatation from '../assets/icons/picto-natation.png'
import pictoMusculation from '../assets/icons/picto-musculation.png'
import pictoCyclisme from '../assets/icons/picto-cyclisme.png'





function Sidebar (){

 return (
    <div className="sidebar">
      <div className="sidebar-content">
      <div className="sidebar-content-navigation-zone">
      <ul className="sidebar-content-navigation-zone-list">
      <li className="sidebar-content-navigation-zone-list-element">
        <NavLink to="./home">
        <img src={pictoYoga} className="sidebar-content-navigation-zone-list-element-img" alt="Picto yoga"/>
        </NavLink>
        </li>
        <li className="sidebar-content-navigation-zone-list-element">
        <NavLink to="./home">
        <img src={pictoNatation} className="sidebar-content-navigation-zone-list-element-img" alt="Picto natation"/>
        </NavLink>
        </li>
        <li className="sidebar-content-navigation-zone-list-element">
        <NavLink to="./home">
        <img src={pictoCyclisme} className="sidebar-content-navigation-zone-list-element-img" alt="Picto cyclisme"/>
        </NavLink>
        </li>      
        <li className="sidebar-content-navigation-zone-list-element">
        <NavLink to="./home">
        <img src={pictoMusculation} className="sidebar-content-navigation-zone-list-element-img"alt="Picto musculation"/>
        </NavLink>
        </li>
        </ul>
        </div>
        <div className="sidebar-content-copyright-zone">
        <div className="sidebar-content-copyright-zone-copyright">
<div className="sidebar-content-copyright-zone-copyright-text">
Copyright, SportSee 2020
</div>
</div>
      </div>
      </div>
    </div>
  )

}


export default Sidebar;