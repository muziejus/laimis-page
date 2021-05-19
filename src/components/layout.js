import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
// import { MDXProvider } from "@mdx-js/react"
// import { MdxLink } from "gatsby-theme-i18n"
// import Header from "./header"
// import Footer from "./footer"
// import Main from "./main"
import "./layout.css";

// const components = {
//   a: MdxLink,
// }

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={ data => (

  // return (
  //   <React.Fragment>
  //     <Header />
  //     <Main >
  //       <MDXProvider components={components}>
  //         {children}
  //       </MDXProvider>
  //     </Main>
  //     <Footer/>
  //   </React.Fragment>
  // )
  //
    <>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>a paragraph.</p>
      <div>
        {children}
      </div>
    </>
    )}
  />
)

export default Layout
