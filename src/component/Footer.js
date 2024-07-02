import React from 'react'
import { PageLink } from '../data'
import { SocialLink } from '../data'
const Footer = () => {
  return (
    <React.Fragment>
        <footer className="section footer">
      <ul className="footer-links">
       {
            PageLink.map((as) =>{
                 return <li key={as.id}>
                    <a href={as.href} className="footer-link"> {as.text} </a>
                </li>
            })
         }
      </ul>
      <ul className="footer-icons">
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
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    </React.Fragment>
  )
}

export default Footer