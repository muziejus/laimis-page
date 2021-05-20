import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Trans } from "@lingui/macro"
import Testimonial from "./testimonial";

export default function TestimonialsList() {
  const data = useStaticQuery(graphql`
    query TestmonialsQuery {
      allMdx(filter: {fileAbsolutePath: {regex: "/src.testimonial/"}}) {
        nodes {
          id
          frontmatter {
            date
            author
          }
          body
        }
      }
    }`
  )

  return(
    <section>
      {data.allMdx.nodes.map(node => (
        <Testimonial key={node.id} testimonial={node} />
      ))}
    </section>
  
  )

}
