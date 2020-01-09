import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import { Heading } from '@shopify/polaris'

const Text = styled.p`
    font-family: helvetica;
    font-size: 1em;
    padding: 20px;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const imgStyle = {
    width: '300px',
}

const Blog = ({ data }) => {
    const blog = data.shopifyArticle
    return(
        <div>
            <Heading>{blog.title}</Heading>
            <Wrapper>
                <Img style={imgStyle} fluid={blog.image.localFile.childImageSharp.fluid} />
            </Wrapper>
            <Text>{blog.content}</Text>
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

