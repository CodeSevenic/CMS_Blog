/** *****************************************************
 * Any file inside the folder pages/api is mapped to /api/* and
 * will be treated as an API endpoint instead of a page
 **********************************************************/

import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINTS;
const graphCmsToken = process.env.GRAPH_CMS_TOKEN;

export default async function comments(req, res) {
  const { name, email, comment, slug } = req.body;

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphCmsToken}`,
    },
  });

  const query = gql/*template*/ `
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, {
      name,
      email,
      comment,
      slug,
    });
    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
}
