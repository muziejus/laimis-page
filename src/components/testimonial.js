import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Trans } from "@lingui/macro"
import { i18n } from "@lingui/core"
import "./testimonial.css";

export default function Testimonial({ testimonial }){
  const date = i18n.date(testimonial.frontmatter.date);

  return (
    <div className="testimonial">
      <p className="author"><Trans>Author</Trans>: {testimonial.frontmatter.author}</p>
      <p className="date"><Trans>Date</Trans>: {date}</p>
      <MDXRenderer>
        {testimonial.body}
      </MDXRenderer>
    </div>
  )
}
