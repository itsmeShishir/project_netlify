import React from 'react'
import Logo from "../images/logo.svg";
import { PageLink } from '../data';
import { SocialLink } from '../data';
const NavBar = () => {
  return (
    <React.Fragment>
        <nav className="navbar">
        <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
         {
            PageLink.map((as) =>{
                 return <li key={as.id}>
                    <a href={as.href} className="nav-link"> {as.text} </a>
                </li>
            })
         }
        </ul>

        <ul className="nav-icons">
          {
            SocialLink.map((link)=>{
                const {id, icon, href} = link;
                return (
                    <li key={id}>
                        <a href={href} target="_blank" className="nav-icon"
                        ><i className={icon}></i
                        ></a>
                    </li>
                )
            })
          }
        </ul>
      </div>
    </nav>
    </React.Fragment>
  )
}

export default NavBar