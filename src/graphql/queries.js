import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges{
          node{
              createdAt, name, description, forksCount, fullName, id, language, ownerAvatarUrl, ratingAverage, reviewCount, stargazersCount
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

// other queries...