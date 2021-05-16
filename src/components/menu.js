import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from 'react-intl';

import "./menu.css";

const Menu = ({ url, langKey, location }) => {
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

  return (
    <ul className="menu">
      {data.site.siteMetadata.menuLinks.map((link) => {
        let className = "";
        if(url.includes(link.link)){
          className = "active";
        }

        return (
          <li key={link.name} className={className}>
            <Link to={urlPrefix + link.link} >
              <FormattedMessage id={link.name} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
