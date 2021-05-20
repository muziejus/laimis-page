import * as React from "react"
import { navigate, graphql, useStaticQuery } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import Header from "./header"
import Footer from "./footer"
import Main from "./main"
import "./layout.css";

const Layout = ({ children }) => {
  let pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const { locale } = useLocalization();
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

  console.log(data);
  const document = data.allMdx.nodes.find(node => node.frontmatter.pathname === pathname && node.frontmatter.locale === locale);
  const image = data.allFile.nodes.find(node => node.absolutePath.includes(document.frontmatter.photo))

	if(!document) {
		return navigate("/");
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
