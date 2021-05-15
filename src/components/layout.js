/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
// import 'intl';
import "./layout.css"

const Layout = ({ children, location, i18nMessages }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          languages {
            defaultLangKey
            langs
          }
        }
      }
    }
  `)

  const url = "";
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  console.log(`langs: ${langs}`);
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));

  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
    >
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} langs={langsMenu} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
