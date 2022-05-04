import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: ID!) {
    removeBook(input: $input) {
      _id
      username
      email
      bookCount
      savedBooks{
        # _id
        bookId
        authors 
        image
        link
        title
        description
      }
    }
  }
`;


export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks{
        # _id
        bookId
        authors 
        image
        link
        title
        description
      }
    }
  }
`;