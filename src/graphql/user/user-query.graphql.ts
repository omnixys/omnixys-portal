import { gql } from '@apollo/client';

export const ME = gql`
  query GetMe {
    me {
      id
      username
      firstName
      lastName
      email
      ticketIds
      invitationIds
      createdAt
      updatedAt
      phoneNumbers {
        id
        number
        type
        userId
      }
    }
  }
`;

export const GET_USERS = gql`
    query Users {
    users {
        id
        username
        firstName
        lastName
        ticketIds
        invitationIds
        phoneNumbers {
            kind
            value
        }
        roles
        email
    }
}
`;

export const GET_USER_BY_ID = gql`
  query GetById($userId: ID!) {
    user(id: $userId) {
      id
      username
      firstName
      lastName
      email
    }
  }
`;


export const GET_USER_LIST = gql`
  query GetUserList($guesIdList: [ID!]!) {
    getUserList(userIds: $guesIdList) {
      id
      firstName
      lastName
    }
  }
`;