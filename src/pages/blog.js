import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Heading } from '@shopify/polaris';
import Img from 'gatsby-image';
import { Grid, Product } from '../components/ProductGrid/styles'

const BlogPage = () => {
    const { allShopifyArticle } = useStaticQuery(
        graphql`
            query {
                allShopifyArticle(sort: {order: DESC, fields: publishedAt}) {
                    edges {
                        node {
                        title
                        image {
                            localFile {
                                childImageSharp {
                                    fluid(maxWidth: 300) {
                                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
                
        `
    )

    return (
    <>
        <Heading>My Blog</Heading>
        <Grid>
            {allShopifyArticle.edges.map(({ node: {title, image}}) => {
                return (
                <Product>
                    <Link style={{textDecoration: 'none'}} to={`/blog/${title}`}>
                        <Img fluid={image.localFile.childImageSharp.fluid}/>
                        <h3>{title}</h3>
                    </Link>
                </Product>
                )
            })}
        </Grid>
    </>
    )
}

export default BlogPage; 