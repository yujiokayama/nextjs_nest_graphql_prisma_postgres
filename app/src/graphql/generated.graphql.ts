import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type Mutation = {
  __typename?: 'Mutation'
  createUser: User
}

export type MutationCreateUserArgs = {
  displayName: Scalars['String']
  username: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  users: Array<User>
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']
  displayName: Scalars['String']
  id: Scalars['ID']
  updatedAt: Scalars['DateTime']
  username: Scalars['String']
}

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>

export type GetUsersQuery = {
  __typename?: 'Query'
  users: Array<{
    __typename?: 'User'
    id: string
    displayName: string
    username: string
    createdAt: any
    updatedAt: any
  }>
}

export type CreateUserMutationVariables = Exact<{
  displayName: Scalars['String']
  username: Scalars['String']
}>

export type CreateUserMutation = {
  __typename?: 'Mutation'
  createUser: { __typename?: 'User'; displayName: string; username: string }
}

export const GetUsersDocument = gql`
  query GetUsers {
    users {
      id
      displayName
      username
      createdAt
      updatedAt
    }
  }
`

export function useGetUsersQuery(
  options?: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'>,
) {
  return Urql.useQuery<GetUsersQuery>({ query: GetUsersDocument, ...options })
}
export const CreateUserDocument = gql`
  mutation CreateUser($displayName: String!, $username: String!) {
    createUser(displayName: $displayName, username: $username) {
      displayName
      username
    }
  }
`

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
  )
}
