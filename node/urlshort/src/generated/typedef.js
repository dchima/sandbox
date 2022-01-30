import { gql } from 'apollo-server-express';

const typeDefs = gql`

  type Url {
    id: String!
    initial_url: String!
    url_short: String!
  }

  type Query {
    getUrl(
      url_short: String!
      ): Url
  }

  type Mutation {
    addUrl(
      url: String!
    ): Url!
  }
`;

module.exports = typeDefs;
