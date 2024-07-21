import '../styles/Nav.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list-element">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? 'navigation-list-element-link-active'
                : 'navigation-list-element-link-inactive'
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className="navigation-list-element">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'navigation-list-element-link-active'
                : 'navigation-list-element-link-inactive'
            }
          >
            A propos
          </NavLink>
        </li>

      <li className="navigation-list-element">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'navigation-list-element-link-active'
                : 'navigation-list-element-link-inactive'
            }
          >
            A propos
          </NavLink>
        </li>
      
      <li className="navigation-list-element">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'navigation-list-element-link-active'
                : 'navigation-list-element-link-inactive'
            }
          >
            A propos
          </NavLink>
        </li>

      <li className="navigation-list-element">
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? 'navigation-list-element-link-active'
            : 'navigation-list-element-link-inactive'
        }
      >
        A propos
      </NavLink>
    </li>
  </ul>
    </nav>
  )
}
export default Nav
