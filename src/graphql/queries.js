import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges{
          node{
              createdAt, name, description, forksCount, fullName, id, language, ownerAvatarUrl, ratingAverage, reviewCount, stargazersCount, ownerName
          }
      }
    }
  }
`;

export const USER_AUTH_STATUS = gql`
    query{
        authorizedUser {
            id
            username
        }
}
`;

export const SINGLE_REPOSITORY = gql`
    query Repository($id: ID!){
      repository(id: $id ) {
        id
        ownerName
        ownerAvatarUrl
        fullName
        description
        language
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
        url
        reviews {
          edges {
            node {
              id
              text
              rating
              createdAt
              user {
                id
                username
              }
            }
          }
        }
      }
    }
`;

// other queries...