import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

export default function TestimonialImage({ originalName, alt, caption }) {

  const images = useStaticQuery(graphql`
    query TestimonialImagesQuery {
      allFile(filter: {absolutePath: {regex: "/testimonials.images/"}}) {
        nodes {
          absolutePath
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }`).allFile.nodes;

  if(originalName){
    const image = getImage(images.find(i => i.absolutePath.includes(originalName)));
		console.log("image", image);
    return (
      <div>
        <GatsbyImage image={image} alt={alt} />
        <p class="text-xs">{caption}</p>
      </div>
    )  
  }

  return null;
}
