import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import Header from "./header"
import Footer from "./footer"
import Main from "./main"
import "./layout.css";

const Layout = ({ passedPath, children }) => {
  const { locale } = useLocalization();
  let pathname = "";
  if(passedPath) {
    if(locale == "en") {
      pathname = passedPath;
    } else {
      pathname = `/${locale}${passedPath}`;
    }
  }
  const data = useStaticQuery(graphql`
    query MdxQuery {
      allMdx{
        nodes {
          frontmatter {
            title
            pathname
            locale
            photo
            caption
          }
          body
        }
      }
      allFile(filter: {absolutePath: {regex: "/images/"}}) {
        nodes {
          absolutePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }`);

  const document = data.allMdx.nodes.find(node => node.frontmatter.pathname === pathname && node.frontmatter.locale === locale);
  let image = ""
  if (document) {
    image = data.allFile.nodes.find(node => node.absolutePath.includes(document.frontmatter.photo))
  }

  return (
    <>
      <Header />
      <Main document={document} image={image}>
        {children}
      </Main>
      <Footer/>
    </>
  )
}

export default Layout
