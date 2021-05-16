import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from 'react-intl';

const Menu = () => {
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

  return (
    <ul>
      {data.site.siteMetadata.menuLinks.map((link) => (
        <li key={link.name}>
          <Link to={link.link} >
            <FormattedMessage id={link.name} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
