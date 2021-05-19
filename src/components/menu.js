import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "./menu.css";

const Menu = ({ dropdown, langKey }) => {
  const data = useStaticQuery(graphql`
    query menuLinksQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  let urlPrefix = "";
  if(langKey !== "en"){
    urlPrefix = `/${langKey}`;
  }

  const isDropdown = dropdown ? "dropdown-menu" : "menu";


  return (
    <ul className={isDropdown}>
      {data.site.siteMetadata.menuLinks.map((link) => {
        let className = "";
        // if(url.includes(link.link)){
        //   className = "active";
        // }

        return (
          <li key={link.name} className={className}>
            <Link to={urlPrefix + link.link} >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
