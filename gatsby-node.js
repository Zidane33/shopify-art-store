const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const products = graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.handle}/`,
        component: path.resolve(`./src/templates/ProductPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })
  });

  const blogs = graphql(`
    {
      allShopifyArticle {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `).then(result => {
    const template =  path.resolve(`./src/templates/Blog/index.js`);
    result.data.allShopifyArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.title}/`,
        component: template,
        context: {
          id: node.id
        },
      })
    })
  }).catch(err => console.log(err))

  return Promise.all([products, blogs])
}
