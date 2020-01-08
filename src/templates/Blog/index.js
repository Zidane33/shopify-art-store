import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const Blog = ({ data }) => {
    const blog = data.shopifyArticle
    return(
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>{blog.id}</p>
            <Img fluid={blog.image.localFile.childImageSharp.fluid} />
        </div>
    )
}

export const query = graphql`
    query($id: String!) {
        shopifyArticle(id: {eq: $id} ) {
            id
            title
            url
            content
            image {
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 910) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

export default Blog

