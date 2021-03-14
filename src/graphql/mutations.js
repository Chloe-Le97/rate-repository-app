import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation authorize($username: String!, $password: String!) {
   authorize(credentials: { username: $username, password: $password }) {
            accessToken
       }
  }
`;

export const REVIEW = gql`
  mutation createReview($repositoryName: String!, $ownerName: String!, $text: String!, $rating: Int!){
    createReview(review: { repositoryName: $repositoryName, ownerName: $ownerName, text: $text, rating: $rating }){
      repositoryId
    }
  }
`;