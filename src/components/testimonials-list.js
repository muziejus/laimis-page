import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Testimonial from "./testimonial";

export default function TestimonialsList() {
  const data = useStaticQuery(graphql`
    query TestmonialsQuery {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/src.testimonial/"}},
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        nodes {
          id
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            author
          }
          body
        }
      }
    }`
  )

  return(
    <section className="pb-4">
      {data.allMdx.nodes.map(node => (
        <Testimonial key={node.id} testimonial={node} />
      ))}
    </section>
  
  )

}
