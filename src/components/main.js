import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./main.css";

export default function Main({ image, document, children }) {

  console.log(image);


  return (
    <main>
      <article>
        <h1>{document.frontmatter.title}</h1>
        <MDXRenderer>
          {document.body}
        </MDXRenderer>
        {children}
      </article>
      <aside>
        <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={document.frontmatter.alt} />
        <p className="text-xs md:text-sm">{document.frontmatter.caption}</p>
      </aside>
    </main>
  );
};

