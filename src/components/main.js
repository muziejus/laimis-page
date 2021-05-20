import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image"

import "./main.css";

export default function Main({ image, document, children }) {

  if(document && image){
    return (
      <main>
        <h1>{document.frontmatter.title}</h1>
        <article>
          <section>
            <MDXRenderer>
              {document.body}
            </MDXRenderer>
            {children}
          </section>
          <aside>
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={document.frontmatter.alt || ""} />
            <p className="text-xs md:text-sm">{document.frontmatter.caption}</p>
          </aside>
        </article>
      </main>
    );
  }

  return null;
};

