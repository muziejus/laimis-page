/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header"
import Footer from "./footer"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { FormattedMessage, IntlProvider } from 'react-intl';
import "./layout.css";
// import 'intl';

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

  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  // console.log(`location: ${location.pathname}`);
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));

  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
    >
      <Header url={url} langKey={langKey} langs={langsMenu} />
      <main>
        <article>
          {children}
        </article>
        <aside>
        <StaticImage src="../images/laimis-uhaul.jpg" alt="Laimis smiling broadly." 
        placeholder="blurred"
        />
        <p className="text-sm md:text-base"><FormattedMessage id="laimisUHaulCaption" /></p>
        </aside>
      </main>
    <Footer langs={langsMenu} />
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
